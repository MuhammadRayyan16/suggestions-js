const suggestions = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "React",
  "Node.js"
];

function showSuggestions() {
  const input = document.getElementById("inputField").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(input)
  );

  filteredSuggestions.forEach(suggestion => {
    const suggestionElement = document.createElement("div");
    suggestionElement.textContent = suggestion;
    suggestionElement.classList.add("suggestion");
    suggestionElement.onclick = () => {
      document.getElementById("inputField").value = suggestion;
      suggestionsDiv.innerHTML = "";
    };
    suggestionsDiv.appendChild(suggestionElement);
  });
}

function removeSuggestions() {
  document.getElementById("suggestions").innerHTML = "";
}

function clearInput() {
  document.getElementById("inputField").value = "";
  document.getElementById("suggestions").innerHTML = "";
}
