// Function to fetch data from a JSON file
function fetchData(url) {
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

// Function to clear all child nodes of an element
function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Function to create an element with text content
function createElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.className = className;
  }
  return element;
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

// Function to fetch groups and populate group list on page load
document.addEventListener('DOMContentLoaded', () => {
  const groupList = document.getElementById('group-list');
  fetchData('/data/groups.json')
    .then(groups => {
      groups.forEach(group => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `templates.html#${group.id}`;
        link.textContent = group.name;
        listItem.appendChild(link);
        groupList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Failed to fetch groups:', error);
    });

  const groupId = window.location.hash.slice(1);
  if (groupId) {
    fetchTemplatesByGroup(groupId);
  } else {
    fetchAllTemplates();
  }
});

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

// Function to create template list items
function createTemplateListItem(template) {
  const listItem = document.createElement('li');
  const titleElement = createElement('h3', template.title);
  listItem.appendChild(titleElement);
  const copyButton = createElement('button', 'Copy', 'copy-btn');
  copyButton.addEventListener('click', () => copyTemplate(template.content));
  listItem.appendChild(copyButton);
  return listItem;
}

// Handle hash changes and fetch templates accordingly
window.addEventListener('hashchange', () => {
  const groupId = window.location.hash.slice(1);
  if (groupId) {
    fetchTemplatesByGroup(groupId);
  } else {
    fetchAllTemplates();
  }
});

// Footer
window.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector(".footer");
  const isScrolledToBottom = () => {
    return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
  };

  const handleScroll = () => {
    if (isScrolledToBottom()) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
