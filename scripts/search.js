document.addEventListener("DOMContentLoaded", async () => {
  // Import the templates data (assuming you have this in data/templates.js)
  const templates = getTemplates(); // Make sure you have the getTemplates() function defined

  // Function to perform the search
  function performSearch(query) {
    query = query.toLowerCase();
    return templates.filter(
      (template) =>
        template.title.toLowerCase().includes(query) ||
        template.content.toLowerCase().includes(query)
    );
  }

  // Function to display templates
  function displayTemplates(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";

    if (results.length === 0) {
      searchResultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("template-item"); // You can apply your own styling here

      const title = document.createElement("h3");
      title.textContent = result.title;

      // Add a "Copy" button
      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy";
      copyButton.classList.add("copy-btn");

      copyButton.addEventListener("click", () => {
        // Copy the template content to the clipboard when the "Copy" button is clicked
        copyToClipboard(result.content);
      });

      resultItem.appendChild(title);
      resultItem.appendChild(copyButton);

      searchResultsContainer.appendChild(resultItem);
    });
  }

  // Parse the search query from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("query");

  if (searchTerm) {
    // Perform the initial search if a query is present in the URL
    const searchInput = document.getElementById("search-input");
    searchInput.value = searchTerm;
    const searchResults = performSearch(searchTerm);
    displayTemplates(searchResults);
  }

  // Handle form submission
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim();
    const searchResults = performSearch(searchTerm);
    displayTemplates(searchResults);
  });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Show a copy success message or perform any other desired action
  alert("Copied to clipboard: " + text);
}
