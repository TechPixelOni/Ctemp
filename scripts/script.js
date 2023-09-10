// Function to fetch data from another JavaScript file
function fetchAndPopulateTemplates(groupId, sortBy) {
  const templateContainer = document.getElementById("template-container"); // Updated ID
  const script = document.createElement("script");
  script.src = "data/templates.js";
  script.onload = () => {
    const templates = getTemplates();

    if (sortBy === "title") {
      templates.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "group") {
      templates.sort((a, b) => a.group.localeCompare(b.group));
    }

    const filteredTemplates = groupId
      ? templates.filter((template) => template.group === groupId)
      : templates;

    clearChildren(templateContainer);
    filteredTemplates.forEach((template) => {
      const listItem = createTemplateListItem(template);
      templateContainer.appendChild(listItem); // Append to the template container
    });
  };

  document.head.appendChild(script);
}

// Function to clear all child nodes of an element
function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Function to create an element with text content and optional class
function createElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.className = className;
  }
  return element;
}

// Function to copy the template content to the clipboard and show a message
function copyTemplate(content) {
  const alertMessage = "Template copied to clipboard!";
  const alertElement = document.createElement("div");
  alertElement.className = "alert";
  alertElement.textContent = alertMessage;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      document.body.appendChild(alertElement);

      // Remove the 'hidden' class to display the message
      setTimeout(() => {
        alertElement.classList.remove("hidden");
      }, 10); // Delay to ensure smooth transition

      // Remove the message and add the 'hidden' class after 2 seconds
      setTimeout(() => {
        alertElement.classList.add("hidden");
        setTimeout(() => {
          document.body.removeChild(alertElement);
        }, 300); // Wait for the transition to complete
      }, 2000); // Hide the message after 2 seconds (2000 milliseconds)
    })
    .catch((error) => {
      console.error("Failed to copy template:", error);
    });
}

// Function to create template list items
function createTemplateListItem(template) {
  const listItem = document.createElement("li");
  listItem.classList.add("template-item"); // Add a class for styling
  const titleElement = createElement("h3", template.title);
  listItem.appendChild(titleElement);
  const copyButton = createElement("button", "Copy", "copy-btn");
  copyButton.addEventListener("click", () => copyTemplate(template.content));
  listItem.appendChild(copyButton);
  return listItem;
}

// Handle hash changes and fetch templates accordingly
window.addEventListener("hashchange", () => {
  const groupId = window.location.hash.slice(1);
  fetchAndPopulateTemplates(groupId);
});

// Function to populate group list on page load
document.addEventListener("DOMContentLoaded", async () => {
  const groupId = window.location.hash.slice(1);
  fetchAndPopulateTemplates(groupId);
});

// Function to debounce the scroll event
function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

// Function to toggle the "hidden" class on the footer
function toggleFooterVisibility() {
  const footer = document.getElementById("page-footer");
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition + windowHeight >= pageHeight - footer.offsetHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}

// Add a debounced event listener for scroll events with a longer delay (e.g., 500 milliseconds)
function registerScrollListener() {
  window.addEventListener("scroll", debounce(toggleFooterVisibility, 500));
}

// Call the function initially to set the initial state
toggleFooterVisibility();

// Call this function after dynamic content is loaded
function loadDynamicContent() {
  // Simulate loading dynamic content (replace this with your actual code)
  const dynamicContent = document.createElement("div");
  document.body.appendChild(dynamicContent);

  // Call registerScrollListener after dynamic content is loaded
  registerScrollListener();
}

// Call loadDynamicContent to load dynamic content (replace this with your actual code)
loadDynamicContent();
