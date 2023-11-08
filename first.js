const bar = document.getElementById("bar");
const navbar =  document.querySelector("#navbar ul")
const close  = document.getElementById("close");
if (bar) {
    bar.addEventListener("click", ()=>{
        navbar.classList.add("active")
    })
    
    if (close) {
        close.addEventListener("click", ()=>{
            navbar.classList.remove("active");
        })
        
    }
}

const mainimg = document.getElementById("mainimg");
const smallimg = document.querySelectorAll(".smallimg")

// smallimg[0].onclick = ()=>{
//     mainimg.src = smallimg[0].src;
// }

// smallimg[1].onclick = ()=>{
//     mainimg.src = smallimg[1].src;
// }

// smallimg[2].onclick = ()=>{
//     mainimg.src = smallimg[2].src;
// }

// smallimg[3].onclick = ()=>{
//     mainimg.src = smallimg[3].src;
// }

const imagesource = Array.from(smallimg).map(img => img.src);

const changeimage = (index)=>{
    mainimg.src = imagesource[index];
};

smallimg.forEach((smallimg, index)=>{
    smallimg.addEventListener("click", ()=>{
        changeimage(index);
    })
})

// link

const home = document.getElementById("home");
const shop = document.getElementById("shop");
const blog = document.getElementById("blog");
const product = document.getElementById("products")

// home.addEventListener("click", ()=>{
   
//     window.location.href = "index.html";
// });

product.addEventListener("click", ()=>{
    window.location.href = "single.html"
})

shop.addEventListener("click", ()=>{
    window.location.href = "shop.html"
})