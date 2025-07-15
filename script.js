/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Function to show loading message
function showLoading() {
  const output = document.getElementById('output');
  output.innerHTML = '<p class="loading">Loading cat fact...</p>';
}

// Function to display error message
function showError(message) {
  const output = document.getElementById('output');
  output.innerHTML = '<p class="error">Error: ' + message + '</p>';
}

// Function to fetch and display cat fact
function fetchCatFact() {
  // Show loading message first
  showLoading();
  
  // Fetch data from the cat facts API (fixed URL with quotes)
  fetch('https://catfact.ninja/fact')
    .then(function(response) {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      return response.json();
    })
    .then(function(data) {
      // Get the output container
      const output = document.getElementById('output');
      
      // Check if we got valid data
      if (data && data.fact) {
        // Display the cat fact with nice formatting
        output.innerHTML = '<div class="cat-fact">' +
                          '<h3>🐱 Cat Fact:</h3>' +
                          '<p>' + data.fact + '</p>' +
                          '</div>';
      } else {
        showError('No cat fact found');
      }
    })
    .catch(function(error) {
      // Handle any errors that occur
      console.log('Error:', error);
      showError('Could not load cat fact. Please try again.');
    });
}

// Function to set up the page when it loads
function setupPage() {
  // Get the output container
  const output = document.getElementById('output');
  
  // Add a button to fetch new cat facts
  output.innerHTML = '<button id="fetch-button" class="fetch-btn">Get Cat Fact! 🐱</button>';
  
  // Add event listener to the button
  const fetchButton = document.getElementById('fetch-button');
  fetchButton.addEventListener('click', fetchCatFact);
  
  // Automatically load the first cat fact
  fetchCatFact();
}

// Wait for the page to load, then set up everything
document.addEventListener('DOMContentLoaded', setupPage);

console.log("Cat facts API starter code loaded.");