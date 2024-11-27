document.addEventListener("DOMContentLoaded", function () {
    let a = document.querySelector(".tor");
    let b = document.querySelector(".besh");
    let d = document.querySelector("h1");
    
    let i = document.querySelector(".sds") 
    
    console.log(a);
    console.log(b);
    console.log(d);
    
    i.addEventListener("click", function () {
        let g = document.querySelector("input").value
       d.innerHTML=g
    });

    a.addEventListener("click", function () {
        let g = document.querySelector("input").value
        
        d.textContent = ++g;
    });
    b.addEventListener("click", function () {
        let g = document.querySelector("input").value
        d.textContent = --g;
    });

});

