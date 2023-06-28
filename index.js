var a = 0;
function mouseOver(){
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        const error = document.getElementById('error');

        const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(( !email.match(emailCheck) || pass == "") && a==0){
        buttonMoveLeft();
        a = 1;
        error.innerHTML = "Please input correct details to login!";
        error.style.color = "red";
        return false;
        } 

        if(( !email.match(emailCheck) || pass == "") && a==1){
        buttonMoveRight();
        a = 2;
        error.innerHTML = "Please input correct details to login!";
        error.style.color = "red";
        return false;
        } 

        if(( !email.match(emailCheck) || pass == "") && a==2){
        buttonMoveLeft();
        a = 1;
        error.innerHTML = "Please input correct details to login!";
        error.style.color = "red";
        return false;
        } 

        else{ 
            document.getElementById('submit-btn').style.cursor = 'pointer';
            error.innerHTML = "";
            return false;
        };

    };

function buttonMoveLeft(){

        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(-80%)';

    };

function buttonMoveRight(){

        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(80%)';

    };

function resetBtn(){
        const error = document.getElementById('error');
        const button = document.getElementById('submit-btn');
        button.style.transform = 'translateX(0%)';
        error.innerHTML = "";
    };

var b = 0;

function mouseOver1(){
    const name =  document.getElementById('name').value;
    const email = document.getElementById('email-s').value;
    const pass = document.getElementById('pass-s').value;
    const error = document.getElementById('error-s');

    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(( name==""|| !email.match(emailCheck) || pass == "") && a==0){
    buttonMoveLeft1();

    a = 1;
    error.innerHTML = "Please input correct details to sign up!";
    error.style.color = "red";
    return false;
    } 

    if(( name==""|| !email.match(emailCheck) || pass == "") && a==1){
    buttonMoveRight1();
    a = 2;
    error.innerHTML = "Please input correct details to sign up!";
    error.style.color = "red";
    return false;
    } 

    if(( name==""|| !email.match(emailCheck) || pass == "") && a==2){
    buttonMoveLeft1();
    a = 1;
    error.innerHTML = "Please input correct details to sign up!";
    error.style.color = "red";
    return false;
    } 

    else{ 
        document.getElementById('submit-btn-s').style.cursor = 'pointer';
        error.innerHTML = "";
        return false;
    };

};

function buttonMoveLeft1(){

    const button = document.getElementById('submit-btn-s');
    button.style.transform = 'translateX(-80%)';

};

function buttonMoveRight1(){

    const button = document.getElementById('submit-btn-s');
    button.style.transform = 'translateX(80%)';

};

function resetBtn1(){
    const error = document.getElementById('error-s');
    const button = document.getElementById('submit-btn-s');
    button.style.transform = 'translateX(0%)';
    error.innerHTML = "";
};
