// COSTUM NAVABAR
// script costumToggle
document.querySelector('.costumToggle').onclick = function () {
    this.classList.toggle('open');
}

//  Background animasi 
window.addEventListener('scroll', function () {
    let costumNav = document.querySelector('nav');
    costumNav.classList.toggle('bgAnimasi', window.scrollY > 0);
});

// collapse ketika mouse keluar dari navbar-collapse

// const costumCollaps = document.querySelector('.collapse');
// const btnToggle = document.querySelector('.costumToggle');
// costumCollaps.addEventListener('mouseleave', function () {
//     btnToggle.classList.replace('open', 'collapsed');
//     costumCollaps.classList.remove('show');
// });


// akhir COSTUM NAVBAR