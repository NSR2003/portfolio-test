function ToggleMenu(e) {
    e.src=e.src.includes("menu-logo.png")?"./static/close-logo.png":"./static/menu-logo.png";
    
    var navRight = document.querySelector('.right-nav');
    var navleft = document.querySelector('.left-nav');
 
    // Toggle the visibility of .nav-right based on the image source
    if (e.src.includes("menu-logo.png")) {
        // Hide .nav-right
        navRight.classList.remove('sm:block');
        navRight.classList.add('sm:hidden', 'sm:opacity-0');
    } else {
        // Show .nav-right
        navRight.classList.remove('sm:hidden', 'sm:opacity-0');
        navRight.classList.add('sm:block');
    }
    if (e.src.includes("menu-logo.png")) {
        // Hide .nav-right
        navleft.classList.remove('sm:bg-white');
        navleft.classList.add('sm:bg-transparent');
    } else {
        // Show .nav-right
          navleft.classList.add('sm:bg-white');
          navleft.classList.remove('sm:bg-transparent');
    }
 
 } 