var icon = document.getElementById('icon'),
    icon1 = document.getElementById('a'),
    icon2 = document.getElementById('b'),
    icon3 = document.getElementById('c'),
    nav = document.getElementById('nav'),
    blue = document.getElementById('blue'),
    body = document.getElementById('Body'),
    login = document.getElementById('Accedi-registrati');


icon.addEventListener('click', function () {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    body.classList.toggle('over-hidd');
});

$('#login-register-button').on('click', function() {
    setTimeout(function() {
        $('#Accedi-registrati').toggleClass('not-show');
    }, 380);

    if (login.classList.contains('not-show')) {
        login.classList.add('animate-in');
        login.classList.remove('animate-out');
        

        
    } else {
        login.classList.add('animate-out');
        login.classList.remove('animate-in');
    }

    
});



// ANIMAZIONE E CREAZIONE DINAMICA TESTO NEL DIV HERO

var intervalId = window.setInterval(function() {
    //chiamo la funzione e la eseguo ogni 3 secondi
    changeHero();
}, 3000);

function changeHero() {
    

    if ($('#text-animate').length !== 0) {
        $('#text-animate').fadeOut(800, function() {
            $('#text-animate').remove();
            nuoviFornitori().hide().fadeIn(800);
        });
    } else if ($('#text-animate-1').length !== 0) {
        $('#text-animate-1').fadeOut(800, function() {
            $('#text-animate-1').remove();
            ordiniGiornalieri().hide().fadeIn(800);
        });
    } else if ($('#text-animate-2').length !== 0) {
        $('#text-animate-2').fadeOut(800, function() {
            $('#text-animate-2').remove();
            mercatoVirtuale().hide().fadeIn(800);
        });
    }
}

function mercatoVirtuale() {
    var h1 = $("<h1 id='text-animate' >Un <span class='f-bold'>mercato virtuale</span> <br> per <span class='f-bold'>Ristoratori</span> e <span class='f-bold'>Fornitori</span></h1>");
    $('#mercato-virtuale-div').prepend(h1);
    return h1;
}

function nuoviFornitori() {
    var h1 = $("<h1 id='text-animate-1'>trova <span class='f-bold'>facilmente</span> <br> nuovi <span class='f-bold'>fornitori</span></h1>");
    $('#mercato-virtuale-div').prepend(h1);
    return h1;
}

function ordiniGiornalieri() {
    var h1 = $("<h1 id='text-animate-2'>Rendiamo <span class='f-bold'>semplici</span> <br> i tuoi <span class='f-bold'>ordini giornalieri</span></h1>");
    $('#mercato-virtuale-div').prepend(h1);
    return h1;
}


// TEST ANIMAZIONI ON SCROLL --------------------------------------------------------------------------------------------

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();