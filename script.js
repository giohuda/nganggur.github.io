// toggle class active

const navbarList = document.querySelector('.navbar-list');


// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarList.classList.toggle('active');
}

// klik diluar side bar dan diluar hamburger menu untuk menghilanglan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarList.contains(e.target)){
        navbarList.classList.remove('active')
    }
})