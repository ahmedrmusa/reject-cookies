chrome.storage.sync.get('selectors', (data) => {
    const selectors = data.selectors || [
      'button[aria-label="reject"]',
      'button[data-testid="reject"]',
      'button[class*="reject"]'

      // Add selectors as needed
    ];
  
    function clickButton(selector) {
      try {
        const button = document.querySelector(selector);
        if (button) {
          console.log(`Clicked button with selector: ${selector}`);
          button.click();
          // Notify user
          new Notification("Reject Cookies", { body: `Rejected cookies with selector: ${selector}` });
        }
      } catch (error) {
        console.error(`Error clicking button with selector: ${selector}`, error);
      }
    }
  
    selectors.forEach(selector => {
      clickButton(selector);
    });
  });
  