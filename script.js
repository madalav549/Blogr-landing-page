const dropdownContainers = document.querySelectorAll(".dropdown-container");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".menu");

function toggleDropdown(){

  dropdownContainers.forEach(dropdownContainer =>{

    const dropdownContainerHeader = dropdownContainer.querySelector(".dropdown-container-header");
    const dropdown = dropdownContainer.querySelector(".dropdown");
    const header = dropdownContainerHeader.querySelector("a");
    const headerImgs = dropdownContainerHeader.querySelectorAll("img");

    header.addEventListener("click", ()=>{

      if(dropdown.style.display === "flex"){
        dropdown.style.display = "none";
        headerImgs.forEach(img =>{
          img.classList.remove("active-button")
        })
      } else{
        dropdown.style.display = "flex";
        headerImgs.forEach(img =>{
          img.classList.add("active-button")
        })
      }
    });

  });

};

function toggleMenu(){

  if(menu.style.display === "flex"){
    menu.style.display = "none"
    closeButton.style.display = "none";
    menuButton.style.display = "flex";
  }else{
    menu.style.display = "flex"
    closeButton.style.display = "flex";
    menuButton.style.display = "none";
  }

};

document.addEventListener("DOMContentLoaded", ()=>{
  toggleDropdown();
});

[menuButton, closeButton].forEach(button =>{

  button.addEventListener("click", toggleMenu);

});