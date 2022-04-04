function myCallback(){

}

nomeEvent = (()=>{
    let name = document.getElementById('name').value;
    navigator.notification.alert(`Seja bem-vindo(a), ${name}!`, myCallback(), `Bem Vindo!`, `OK`);
});

idadeEvent = (()=>{
    let idade = document.getElementById('idade').value;
    function sexo(buttonIndex){
        if(buttonIndex == 1){
            navigator.notification.alert(`Você é obrigado a se alistar!`, myCallback(), ``, `OK`);
        }else{
            navigator.notification.alert(`Você pode tirar sua habilitação!`, myCallback(), ``, `OK`);
        }
    }
    if(idade>=18){
        navigator.notification.confirm(
        'Você é homem ou mulher?',
        sexo,
        'Pergunta', 
        ['Homem','Mulher'] ) 
    }else if(idade<18 && idade>=0){
        navigator.notification.beep(idade);
    }else{
        navigator.vibrate(3000);
    }
});

exitEvent = (()=>{
    navigator.vibrate(3000);
    navigator.app.exitApp();
});