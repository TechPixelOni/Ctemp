// Function to fetch data from a JSON file
function fetchData(url) {
  // Check if the URL is using the file:// protocol
  if (url.startsWith('file://')) {
    // Use XMLHttpRequest to fetch data when using the file:// protocol
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText);
              resolve(data);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(new Error(`Failed to fetch data: ${xhr.status} ${xhr.statusText}`));
          }
        }
      };
      xhr.open('GET', url);
      xhr.send();
    });
  } else {
    // Use fetch for other protocols
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Failed to fetch data:', error);
        throw error; // Re-throw the error to propagate it
      });
  }
}

// Function to populate the groups in the HTML
function populateGroups() {
  const groupList = document.getElementById('group-list');
  fetchData('/data/groups.json')
    .then(groups => {
      groups.forEach(group => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${group.id}`;
        link.textContent = group.name;
        listItem.appendChild(link);
        groupList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Failed to fetch groups:', error);
    });
}

// Function to copy the template content to the clipboard
function copyTemplate(content) {
  navigator.clipboard.writeText(content)
    .then(() => {
      alert('Template copied to clipboard!');
    })
    .catch(error => {
      console.error('Failed to copy template:', error);
      // Handle the error or display an error message to the user
    });
}

// Function to fetch templates based on group ID and populate template list
function fetchTemplatesByGroup(groupId) {
  const templateList = document.getElementById('template-list');
  fetchData('/data/templates.json')
    .then(templates => {
      const filteredTemplates = templates.filter(template => template.group === groupId);
      clearChildren(templateList);
      filteredTemplates.forEach(template => {
        const listItem = createTemplateListItem(template);
        templateList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Failed to fetch templates:', error);
    });
}

// Function to create template list items
function createTemplateListItem(template) {
  const listItem = document.createElement('li');
  const titleElement = document.createElement('h3');
  titleElement.textContent = template.title;
  listItem.appendChild(titleElement);
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.classList.add('copy-btn');
  copyButton.addEventListener('click', () => copyTemplate(template.content));
  listItem.appendChild(copyButton);
  return listItem;
}

// Function to clear all child nodes of an element
function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Function to handle hash changes and fetch templates accordingly
function handleHashChange() {
  const groupId = window.location.hash.slice(1);
  if (groupId) {
    fetchTemplatesByGroup(groupId);
  } else {
    fetchAllTemplates();
  }
}

// Function to handle scroll and show/hide the footer
function handleScroll() {
  const footer = document.querySelector('.footer');
  const isScrolledToBottom = () => {
    return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
  };

  if (isScrolledToBottom()) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
}

// Function to fetch all templates and populate template list
function fetchAllTemplates() {
  const templateList = document.getElementById('template-list');
  fetchData('/data/templates.json')
    .then(templates => {
      clearChildren(templateList);
      templates.forEach(template => {
        const listItem = createTemplateListItem(template);
        templateList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Failed to fetch templates:', error);
    });
}

// Call the functions when the page is loaded and when the hash changes
document.addEventListener('DOMContentLoaded', () => {
  populateGroups();
  handleHashChange();
});

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('scroll', handleScroll);
