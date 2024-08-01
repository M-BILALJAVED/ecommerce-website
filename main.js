
// for nav link search

const serachbaricon = document.getElementById("serachbaricon");
const serachbar = document.getElementById("serachbar");

serachbaricon.addEventListener("click", () => {

    serachbar.classList.toggle("serachbar-active")
})
// for nav link menu

const menunavicon = document.getElementById("menunavicon");
const navlinks = document.getElementById("navlinks");

menunavicon.addEventListener("click", () => {

    navlinks.classList.toggle("navlinks-active")
})




// for tabs link 
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
