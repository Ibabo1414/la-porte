/**
 * Code de gestion du formulaire
 */

 //*************** Selection du formulaire ***************************
let formulaire = document.querySelector('.login100-form');

//Suivre les modifications de l'e-mail
formulaire.email.addEventListener('change',

    function () {
        validEmail(this)
    });

//Suivre les modifications du mot de passe
formulaire.pass.addEventListener('change',

    function () {
        validPassword(this)
    });


//**************** Validation de l'email ***************************
const validEmail = function (inputEmail) {
    //Création de la Regex pour la validation de l'email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    //ajout de la classe "message-visible" 
    let msg = document.querySelector(".message");

    //Testons l'expression regulière
    if (emailRegExp.test(inputEmail.value)) {
        //- L’adresse e-mail est correctement saisie;
        msg.innerHTML = "Votre adresse mail est valide";
        msg.classList.add('message-visible');
        msg.style.background = "green";
    } else {
        //L’adresse e-mail a été mal saisie;
        msg.innerHTML = "Votre adresse mail n'est pas valide";
        msg.classList.add('message-visible');
        msg.style.background = "red";
    }
};

//**************** Validation du mot de passe ***************************

const validPassword = function (inputPassword) {

    //let sms = "le mot de passe doit contenir au moins 8 caractères";

    let sms = "Votre mot de passe doit contenir au moins : " +
        "\n- 8 caractères" +
        "\n- 1 majuscule" +
        "\n- 1 miniscule" +
        "\n- 1 chiffre";

    let valid = false;
    let regex = (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);
    //Au moins 8 caractères
    if (!regex.test(inputPassword.value)) {
        alert(sms);
    }
    else {
        //sms = "le mot de passe a été validé";
        valid = true;
    }
    //La couleur de fond du formulaire
    let typeColor = "#a7ff3342";

    //ajout de la classe "message-visible"
    let msg = document.querySelector(".message");

    //Testons l'expressions
    if (valid) {
        //- Le mot de passe est correctement saisie;
        msg.innerHTML = "Votre mot de passe est valide";
        msg.classList.add('message-visible');
        msg.style.background = "green";
        document.querySelector(".login100-form").style.backgroundColor = typeColor;

    } else {
        //Le mot de passe a été mal saisie;
        msg.innerHTML = "Votre mot de passe n'est pas valide";
        msg.classList.add('message-visible');
        msg.style.background = "red";
    }
}