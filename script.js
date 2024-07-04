document.getElementById('check-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');
  const errorMessage = document.getElementById('error-message');
  const validPatterns = [
    /^1?\s?\d{3}-\d{3}-\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
    /^1?\s?\d{10}$/,
    /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,
    /^1?\s?\d{3}\s\d{3}\s\d{4}$/,
  ];
  if (userInput === '') {
    // eslint-disable-next-line no-alert
    alert('Please provide a phone number');
    errorMessage.textContent = ''; // Clear the error message div
    return;
  }
  
    const isValid = validPatterns.some((pattern) => pattern.test(userInput));
    resultsDiv.textContent = isValid ? `Valid US number: ${userInput}` : `Invalid US number: ${userInput}`;
    resultsDiv.style.color = isValid ? 'green' : 'red';
    errorMessage.textContent = '';
  });
  
  document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
    document.getElementById('error-message').textContent = '';
  });