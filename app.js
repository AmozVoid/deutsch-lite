import { Header, Footer} from "./index.js";

function initApp(){
    const header = new Header();
    header.render();


    Footer();
}

initApp();

async function fetchAndRenderTemplate(templatePath) {
    try {
      const response = await fetch(templatePath); // Fetch the template file
      if (response.ok) { // Check if the fetch was successful
        const templateContent = await response.text(); // Read the content as text
        document.getElementById('content').innerHTML = templateContent; // Inject it into the page
      } else {
        console.error(`Failed to load template: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error fetching template: ${error}`);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderTemplate('./templates/main.html');
  });
  