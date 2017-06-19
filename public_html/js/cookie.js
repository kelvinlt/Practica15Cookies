var li_list = [];
var cookieUsername = "";
var cookieUsernameMayus = "";

window.onload = function () {
    if (getCookie("username") !== "") {
        cookieUsername = getCookie("username");
        cookieUsernameMayus = cookieUsername.toUpperCase();
        document.getElementById('welcome').innerHTML = "Welcome, " + cookieUsernameMayus;
    }
    
    var li1 = createLi();
    var li2 = createLi();
    var li3 = createLi();
    var li4 = createLi();
    var li5 = createLi();
    var li6 = createLi();
    var li7 = createLi();
    var li8 = createLi();
    var li9 = createLi();
    var li10 = createLi();

    li1.innerHTML = "Valor Maximo: "  + Number.MAX_VALUE;
    pushLi(li1);

    li2.innerHTML = "Valor Minimo: "+ Number.MIN_VALUE;
    pushLi(li2);

    li3.innerHTML = "Anchura de pantalla: " + screen.width;
    pushLi(li3);

    li4.innerHTML = "Altura de pantalla: " + screen.height;
    pushLi(li4);

    li5.innerHTML = "Anchura disponible: " + screen.availWidth;
    pushLi(li5);

    li6.innerHTML = "Altura disponible: " + screen.availHeight;
    pushLi(li6);

    li7.innerHTML = "URL actual: " + document.URL;
    pushLi(li7);

    li8.innerHTML = "DOC actual: " + window.location.pathname.split("/").pop();
    pushLi(li8);

    li9.innerHTML = "Random entre 0 & 200: " + Math.floor((Math.random() * 200) + 0);
    pushLi(li9);

    li10.innerHTML = getSystem();
    pushLi(li10);

    showAll();
};

function getUsername() {
    if (cookieUsername == "") {
        cookieUsername = prompt("Please enter your name");
        setCookie("username", cookieUsername, 5);
    }
    else{
        location.reload();   
    }
        location.reload();
};

function setUsern(){
    document.getElementById('usern').innerHTML = "El nombre de usuario es : " + cookieUsername;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function createLi() {
    return document.createElement("LI");
}

function pushLi(li) {
    li_list.push(li);
}

function showAll() {
    var ul = document.createElement("UL");
    document.getElementById("listaPropiedades").appendChild(ul);
    for (var i = 0; i < li_list.length; i++){
        ul.appendChild(li_list[i]);
        console.log(li_list[i]);
    }
}

function getSystem() {
    if (navigator.appVersion.indexOf("Win") != -1)
        return "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1)
        return "Mac";
    if (navigator.appVersion.indexOf("X11") != -1)
        return "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1)
        return "Linux";
}