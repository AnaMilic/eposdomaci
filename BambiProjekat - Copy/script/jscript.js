
function Vrh(){
    window.scroll(0,0);
}

function prikaziDatum(){
    document.getElementById("prikaz").innerHTML=Date();

}
var koordinate;
function ispisiLokaciju(koordinate){
   document.getElementById("lokacija").innerHTML = 
        "Geografska širina: " + koordinate.coords.latitude + "<br>" +
        "Geografska dužina " + koordinate.coords.longitude;
           
}


function pronadjiLokaciju()
{
    // Proverava da li pregledač podržava GeoLokaciju APi ili ne
    if (navigator.geolocation) { // Podržana
        navigator.geolocation.getCurrentPosition(ispisiLokaciju);
    } else { // Nije podržana
        alert("Ovaj pretraživač ne podržava geolokaciju!");
    }
}

function validate() {
    var ime = document.forms["registracija"]["ime"].value;
    var prezime = document.forms["registracija"]["prezime"].value;
    var email = document.forms["registracija"]["email"].value;
    var sifra = document.forms["registracija"]["password"].value;
    var uslovi = document.forms["registracija"]["uslovi"].checked;

    if(ime == ""){
        document.getElementById('greskaIme').innerHTML = "Ime ne sme biti prazno"
    }
    else{
        document.getElementById('greskaIme').innerHTML = ""
    }

    if(prezime == ""){
        document.getElementById('greskaPrezime').innerHTML = "Prezime ne sme biti prazno"
    }
    else{
        document.getElementById('greskaPrezime').innerHTML = ""
    }
    if(email == ""){
        document.getElementById('greskaEmail').innerHTML = "Email ne sme biti prazan"
    }
    else{
        document.getElementById('greskaEmail').innerHTML = ""
    }
    if(sifra == ""){
        document.getElementById('greskaSifra').innerHTML = "Sifra ne sme biti prazna"
    }
    else if(sifra.length<5){
        document.getElementById('greskaSifra').innerHTML="Sifra ne sme biti kraca od 5 karaktera"
    }
    else{
        document.getElementById('greskaSifra').innerHTML = ""
    }
    if(!uslovi){
        document.getElementById('greskaUslov').innerHTML = "Ovo polje je obavezno"
    }
    else{
        document.getElementById('greskaUslov').innerHTML = ""
    }

    if(ime == "" || prezime == "" || email == "" || sifra.length<5 || !uslovi){
        return false;
    }
    else{
        alert("Uspesna registracija")
        return true;
    }
    
}


function validateP(){
    var emailP=document.forms["prijava"]["emailP"].value;
    var passwordP=document.forms["prijava"]["passwordP"].value;

    if(emailP==""){
        document.getElementById('greskaEmailP').innerHTML="Email ne sme biti prazan"
    }
    else{
        document.getElementById('greskaEmailP').innerHTML=""
    }

    if(passwordP==""){
        document.getElementById('greskaSifraP').innerHTML="Sifra ne sme biti prazna"
    }
    else{
        document.getElementById('greskaSifraP').innerHTML=""
    }
   
    if(emailP=="" || passwordP==""){
        return false;
    }
    else{
        alert("Uspesna prijava")
        return true;
    }
}
    

$(document).ready(function(){
    $('.slider').slick();
  });


