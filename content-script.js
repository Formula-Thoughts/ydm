console.log("content-script.js");
// Get the entire text content of the HTML document
const documentText = document.documentElement.textContent;

// Check if the text exists within the document
const searchText =
  "To confirm deletion, enter the name of the bucket in the text input field.";
if (documentText.includes(searchText)) {
  setTimeout(function () {
    const targetElement = findTarget();
    if (targetElement) {
      const placeholderValue = targetElement.getAttribute("placeholder");
      targetElement.value = placeholderValue;
      targetElement.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }, 500);
}

function findTarget() {
  const parentElement = document.querySelector(".delete-bucket-actions__input");

  if (parentElement) {
    const firstInputElement = parentElement.querySelector("input");

    if (firstInputElement) {
      return firstInputElement;
    } else {
      console.error("No input element found inside the parent element.");
    }
  } else {
    console.error(
      "Parent element with class .delete-bucket-actions__input not found."
    );
  }
}
