const html = document.documentElement;

// Load saved theme preference on page load
if(localStorage.getItem("theme") === "dark"){
    html.classList.add("dark");
}

// Theme toggle function
function darkBtn(){
    html.classList.toggle("dark");
    
    if(html.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

