const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("close"); 
});
sidebarOpen.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});

sidebarExpand.addEventListener("click", () => {
  sidebar.classList.toggle("close", "hoverable");
});



// Add the hover event to open the sidebar on hover
sidebar.addEventListener("mouseenter", () => {
  sidebar.classList.remove("close");
});

// Add the hover event to close the sidebar on mouse leave
sidebar.addEventListener("mouseleave", () => {
  sidebar.classList.add("close");
  content.style.marginLeft = "0";
});


submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});
// Add a hover event to show the collapse button on hover
sidebar.addEventListener("mouseenter", () => {
  sidebar.classList.remove("close", "hoverable");
});

// Add a hover event to hide the collapse button when not hovering
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("close")) {
    sidebar.classList.add("hoverable");
  }
});


// Typed Writer
const typerElement = document.getElementById('typingText');

function typewriterEffect(text, index, isErasing) {
  if (isErasing) {
    typerElement.innerHTML = text.substring(0, index);
    index--;
  } else {
    typerElement.innerHTML = text.substring(0, index);
    index++;
  }

  if (index > text.length) {
    // Word typed, start erasing
    setTimeout(() => typewriterEffect(text, index, true), 1000); 
  } else if (index >= 0) {
    setTimeout(() => typewriterEffect(text, index, isErasing), 100); 
  } else {
    // Word erased, go to next word
    titleIndex = (titleIndex + 1) % jobTitles.length;
    currentTitle = '';
    setTimeout(changeJobTitle, 500); 
  }
}

const jobTitles = [
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer"
];
let titleIndex = 0;
let currentTitle = '';

function changeJobTitle() {
  const nextTitle = jobTitles[titleIndex];
  if (nextTitle !== currentTitle) {
    currentTitle = nextTitle;
    typewriterEffect(nextTitle, 0, false);
  } else {
    titleIndex = (titleIndex + 1) % jobTitles.length;
    currentTitle = '';
    setTimeout(changeJobTitle, 500);
  }
}

changeJobTitle();
