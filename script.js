//  Step 3: Add JavaScript to toggle the menu when the button is clicked
      // Step 4: Select the toggle button using its class
      const toggleBtn = document.querySelector('.btn-toggle');
      
      // Step 5: Select the dropdown menu using its ID
      const dropdownMenu = document.getElementById('dropdown-menu');

      // Step 6: Add a click event listener to the toggle button
      toggleBtn.addEventListener('click', function() {
        
        // Step 7: Check if the menu currently has the 'hidden' attribute
        if (dropdownMenu.hasAttribute('hidden')) {
          // Step 8: If it is hidden, remove the 'hidden' attribute to show the menu
          dropdownMenu.removeAttribute('hidden');
        } else {
          // Step 9: If it is visible, add the 'hidden' attribute back to hide it
          dropdownMenu.setAttribute('hidden', '');
        }
        
      });