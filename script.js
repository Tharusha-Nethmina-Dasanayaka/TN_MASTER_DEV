const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


var options = {
    strings: ['Trader', 'Developer','Student'],
    typeSpeed: 200, 
    backSpeed: 200,  
    loop: true 
};
var typed = new Typed('#typed', options);


function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Open the first tab by default
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab")[0].classList.add("active");

document.getElementById('readMoreLink','readMoreLink_trade').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    var fullText = document.getElementById('fullText','fullText_trade');
    fullText.style.display = 'block'; // Display the full text
    var readMoreLink = document.getElementById('readMoreLink','readMoreLink_trade');
    readMoreLink.parentNode.removeChild(readMoreLink); // Remove the "Read more" link
  });

  document.getElementById('readMoreLink_trade').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    var fullText = document.getElementById('fullText_trade');
    fullText.style.display = 'block'; // Display the full text
    var readMoreLink = document.getElementById('readMoreLink_trade');
    readMoreLink.parentNode.removeChild(readMoreLink); // Remove the "Read more" link
  });

