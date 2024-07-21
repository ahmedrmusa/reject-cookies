document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('selectors');
    const saveButton = document.getElementById('save');
    const status = document.getElementById('status');
    const selectorsList = document.getElementById('selectors-list');
  
    // Load existing selectors
    chrome.storage.sync.get('selectors', (data) => {
      const selectors = data.selectors || [];
      textarea.value = selectors.join('\n');
      updateSelectorsList(selectors);
    });
  
    // Save button click event
    saveButton.addEventListener('click', () => {
      const selectors = textarea.value.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  
      // Simple validation for selectors
      if (selectors.length === 0) {
        status.textContent = 'Please enter at least one selector.';
        status.style.color = 'red';
        return;
      }
  
      chrome.storage.sync.set({ selectors: selectors }, () => {
        status.textContent = 'Selectors saved!';
        status.style.color = '#28a745';
        updateSelectorsList(selectors);
        setTimeout(() => status.textContent = '', 2000);
      });
    });
  
    // Update the list of selectors in the popup
    function updateSelectorsList(selectors) {
      selectorsList.innerHTML = selectors.map(selector => `<li>${selector}</li>`).join('');
    }
  });
  