

// executing script after pageload

window.onload = function digital_fn(){

    // toggle button

    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
    });
    
    // mansonry js

    let grid = document.querySelector("#site-main .recent-work-area .images-flex")


    let mansonry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true
    })
}