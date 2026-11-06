function show(id) {
    document.getElementById("loader").classList.add("hidden");

    const section = document.querySelectorAll(".content");
    for (const c of section){
        c.classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}

// function show(id) {
//     document.getElementById("loader").classList.add("hidden");
//     document.getElementById("about").classList.remove("active");
//     document.getElementById("projects").classList.remove("active");
//     document.getElementById("contact").classList.remove("active");
//     document.getElementById("languages").classList.remove("active");


//     document.getElementById(id).classList.add("active");

// }