//your JS code here. If required.
document.getElementById("removeButton").addEventListener("click", function() {
      const select = document.getElementById("colorSelect");
      // Remove the selected option if one is chosen
      if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
      }
    });