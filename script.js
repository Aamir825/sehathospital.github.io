const showMenu = (toggleId,NavId) =>{
    let toggle = document.getElementById(toggleId),
    nav = document.getElementById(NavId);

    if(toggle && nav)
    {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav_toggle','nav_menus')

// For Crossing the Bars Of Navbar
const menuBtn = document.querySelector(".menu");
let menuOpen =false;
menuBtn.addEventListener('click' ,() =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

