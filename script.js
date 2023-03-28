AOS.init();
          // enable hidden nav bar
{
    const nav = document.querySelector(".nav");
    const check = document.getElementById('check');
    const menu = document.getElementById('menu');
    

    let lastScrollY = window.ScrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY){
            console.log("down")
            nav.classList.add("nav--hidden");
            menu.classList.remove("active");
            check.classList.remove("active");
        } else {
            nav.classList.remove("nav--hidden");
            menu.classList.remove("active");
            check.classList.remove("active");
            console.log("up")
        }

        lastScrollY = window.scrollY;
    });
    
    
    check.onclick = function(){
        check.classList.toggle('active')
        menu.classList.toggle('active')
        check.classList.remove('check')
    }
    document.onclick = function(e){
        if (e.target.id !== 'check' && e.target.id !== 'menu'){
            menu.classList.remove('active')
            check.classList.remove('active')
        }
        
    }
}


   

