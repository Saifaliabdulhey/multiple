let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let main = document.getElementById("main");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");


arabic.onclick = ()=>{

    setLanguage("arabic");
    localStorage.setItem("LANG","arabic");

};
english.onclick = ()=>{

    setLanguage("english");
    localStorage.setItem("LANG","english");
    
};
onload =()=>{

    setLanguage(localStorage.getItem("LANG"));
}

function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        main.innerHTML = "المبرمج سيف";
        welcome.innerHTML= "اهل وسهلا بكم في موقع المبرمج سيف";
        about.innerHTML ="المزيد عني";
        aboutText.innerHTML = "انا استاذ برمجيات و مهندس برمجيات";
        contact.innerHTML= "اتصل بي";


    }else if(getLanguage === "english"){
        main.innerHTML = "Coder Saif";
        welcome.innerHTML= " Welcome to websit of saif ali abdulhey";
        about.innerHTML =" About Me";
        aboutText.innerHTML = "I am a teacher and software developer";
        contact.innerHTML= "Contact Me";

    }

}