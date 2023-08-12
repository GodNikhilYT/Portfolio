function toggleDiv(divId) {
    var div = document.getElementById(divId);
    var allDivs = document.querySelectorAll(".hidden-div");

    // Hide all visible divs first
    allDivs.forEach(function (item) {
      if (item.style.display !== "none") {
        item.style.display = "none";
      }
    });

    // Show the targeted div
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }