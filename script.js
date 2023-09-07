// Function to fetch data from another JavaScript file
function fetchAndPopulateTemplates(groupId, sortBy) {
  const templateList = document.getElementById("template-list");

  // Load the external JavaScript file dynamically
  const script = document.createElement("script");
  script.src = "data/templates.js"; // Update the path to your JavaScript file
  script.onload = () => {
    // The external JavaScript file (templates.js) has been loaded
    const templates = getTemplates(); // Assuming getTemplates() is a function defined in templates.js

    // Sort templates based on the selected sorting method
    if (sortBy === "title") {
      templates.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "group") {
      templates.sort((a, b) => a.group.localeCompare(b.group));
    }

    const filteredTemplates = groupId
      ? templates.filter((template) => template.group === groupId)
      : templates;

    clearChildren(templateList);
    filteredTemplates.forEach((template) => {
      const listItem = createTemplateListItem(template);
      templateList.appendChild(listItem);
    });
  };

  // Append the script tag to the document to load the external JavaScript file
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

// Footer
window.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");
  const isScrolledToBottom = () => {
    return (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
    );
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
