/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

function toggleSchool() {
    var elems = document.querySelectorAll(".post-container-school");
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].classList.toggle("show");
    }
}

function togglePersonal() {
    var elems = document.querySelectorAll(".post-container-personal");
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].classList.toggle("show");
    }
}