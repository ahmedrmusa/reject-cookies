const selectors = [
    'button[aria-label="reject"]',
    'button[data-testid="reject"]',
    'button[class*="reject"]',
  ];
  
  function clickButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
      button.click();
    }
  }
  
  selectors.forEach(selector => {
    clickButton(selector);
  });
  