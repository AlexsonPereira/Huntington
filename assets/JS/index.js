const peoples = [
    {
        name: "",
        subtitle:"",
        description:""
        

    }
]

function showSubMenu(){
    const submenu = document.getElementById("submenu-mobile")
    if(submenu.classList.contains("flex")){
        submenu.classList.remove("flex")
        submenu.classList.add("hidden")
        setTimeout(() => {
           submenu.classList.remove('opacity-100');
           submenu.classList.add('opacity-0');
           submenu.classList.add('-translate-x-full');
           submenu.classList.remove('translate-x-0');

        }, 100);
    }else{
        submenu.classList.add("flex")
        submenu.classList.remove("hidden")
        setTimeout(() => {
            submenu.classList.remove('opacity-0');
            submenu.classList.add('opacity-100');
            submenu.classList.remove('-translate-x-full')
            submenu.classList.add('translate-x-0') 
        }, 100);
    }
    
}

function showCv(){

}