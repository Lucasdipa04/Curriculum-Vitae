//aca quito off y añado on a sobre mi

document.getElementById("boton1").addEventListener("click", function() {
    document.getElementById("exp").classList.add("off");
    document.getElementById("contacto").classList.add("off");
    document.getElementById("exp").classList.remove("on");
    document.getElementById("contacto").classList.remove("on");
    document.getElementById("sobre-mi").classList.remove("off");
    document.getElementById("sobre-mi").classList.add("on");

    if (document.getElementById("sobre-mi").classList.contains("on")){
        localStorage.setItem("sobre mi","on");
    } else {
        localStorage.removeItem("sobre mi", "on")
    };

    if (document.getElementById("exp").classList.contains("on")){
        localStorage.setItem("exp","on");
    } else {
        localStorage.removeItem("exp", "on")
    };
    
    if (document.getElementById("contacto").classList.contains("on")){
        localStorage.setItem("contacto","on");
    } else {
        localStorage.removeItem("contacto", "on")
    };
});

//aca quito off y añado on a experiencia

document.getElementById("boton2").addEventListener("click", function() {
    document.getElementById("exp").classList.remove("off");
    document.getElementById("exp").classList.add("on");
    document.getElementById("contacto").classList.add("off");
    document.getElementById("sobre-mi").classList.add("off");
    document.getElementById("contacto").classList.remove("on");
    document.getElementById("sobre-mi").classList.remove("on");

    if (document.getElementById("sobre-mi").classList.contains("on")){
        localStorage.setItem("sobre mi","on");
    } else {
        localStorage.removeItem("sobre mi", "on")
    };

    if (document.getElementById("exp").classList.contains("on")){
        localStorage.setItem("exp","on");
    } else {
        localStorage.removeItem("exp", "on")
    };
    
    if (document.getElementById("contacto").classList.contains("on")){
        localStorage.setItem("contacto","on");
    } else {
        localStorage.removeItem("contacto", "on")
    };
});

//aca quito off y añado on a contacto

document.getElementById("boton3").addEventListener("click", function() {
    document.getElementById("exp").classList.add("off");
    document.getElementById("contacto").classList.remove("off");
    document.getElementById("contacto").classList.add("on");
    document.getElementById("sobre-mi").classList.add("off");
    document.getElementById("sobre-mi").classList.remove("on");
    document.getElementById("exp").classList.remove("on");

    if (document.getElementById("sobre-mi").classList.contains("on")){
        localStorage.setItem("sobre mi","on");
    } else {
        localStorage.removeItem("sobre mi", "on")
    };

    if (document.getElementById("exp").classList.contains("on")){
        localStorage.setItem("exp","on");
    } else {
        localStorage.removeItem("exp", "on")
    };
    
    if (document.getElementById("contacto").classList.contains("on")){
        localStorage.setItem("contacto","on");
    } else {
        localStorage.removeItem("contacto", "on")
    };
});

//guardo en localstorage en que seccion me quede

if(localStorage.getItem("sobre mi") === "on"){
    document.getElementById("sobre-mi").classList.add("on");
    document.getElementById("sobre-mi").classList.remove("off");
    document.getElementById("contacto").classList.add("off");
    document.getElementById("contacto").classList.remove("on");
    document.getElementById("exp").classList.remove("on");
    document.getElementById("exp").classList.add("off");
}
if(localStorage.getItem("exp") === "on"){
    document.getElementById("exp").classList.add("on");
    document.getElementById("exp").classList.remove("off");
    document.getElementById("sobre-mi").classList.add("off");
    document.getElementById("sobre-mi").classList.remove("on");
    document.getElementById("contacto").classList.remove("on");
    document.getElementById("contacto").classList.add("off");
}
if(localStorage.getItem("contacto") === "on"){
    document.getElementById("contacto").classList.add("on");
    document.getElementById("contacto").classList.remove("off");
    document.getElementById("sobre-mi").classList.add("off");
    document.getElementById("sobre-mi").classList.remove("on");
    document.getElementById("exp").classList.remove("on");
    document.getElementById("exp").classList.add("off");
}