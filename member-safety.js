const submitButton = document.getElementById("submit-btn");
const saveProgressButton = document.getElementById("save-progress");
const form = document.getElementById("member-safety-form");

window.addEventListener("load", () => {
  const inputCollection = form.elements;
  const inputs = Array.from(inputCollection);

  inputs.forEach(input => {
    if (input.type === "radio") {
      const savedValue = localStorage.getItem(input.name);
      if (savedValue && input.value === savedValue) {
        input.checked = true;
      }
    } else if (input.name) {
      const savedValue = localStorage.getItem(input.name);
      if (savedValue) {
        input.value = savedValue;
      }
    }
  });
});

submitButton.addEventListener("click", () => {
  const inputCollection = form.elements;
  const inputs = Array.from(inputCollection);

  inputs.forEach(input => {
    input.style.border = "none";
    input.style.borderBottom = "0.5px solid black";

    if (!input.value) {
      input.style.border = "1px solid red";
    }
  });

  saveProgress();
});

saveProgressButton.addEventListener("click", () => {
  const inputCollection = form.elements;
  const inputs = Array.from(inputCollection);

  inputs.forEach(input => {
    if (input.type === "radio") {
      if (input.checked) {
        localStorage.setItem(input.name, input.value);
      }
    } else if (input.name && input.value) {
      localStorage.setItem(input.name, input.value);
    }
  });

  alert("Your form progress has been saved!");
});

function saveProgress() {
  const inputCollection = form.elements;
  const inputs = Array.from(inputCollection);

  inputs.forEach(input => {
    if (input.type === "radio") {
      if (input.checked) {
        localStorage.setItem(input.name, input.value);
      }
    } else if (input.name && input.value) {
      localStorage.setItem(input.name, input.value);
    }
  });
}
