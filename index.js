var icon = document.getElementById("icon"),
    icon1 = document.getElementById("a"),
    icon2 = document.getElementById("b"),
    icon3 = document.getElementById("c"),
    nav = document.getElementById('nav'),
    blue = document.getElementById("blue"),
    body = document.getElementById("Body"),
    login = document.getElementById("Accedi-registrati");


icon.addEventListener('click', function () {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    body.classList.toggle('over-hidd');
});

$("#login-register-button").on("click", function() {
    setTimeout(function() {
        $("#Accedi-registrati").toggleClass("not-show");
    }, 480);

    if (login.classList.contains('not-show')) {
        login.classList.add('animate-in');
        login.classList.remove('animate-out');
        

        
    } else {
        login.classList.add('animate-out');
        login.classList.remove('animate-in');
    }

    
});


