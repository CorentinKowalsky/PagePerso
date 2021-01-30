function darkMode(){
    var element = document.body;
    element.classList.toggle("darkMode");
}

function btSecret(){
    var element = document.querySelector('article')
    element.classList.toggle('btSecret');
}if(btSecret() == true){
    console,console.log('Hello');
}else{
    console,console.log('Bye');
}

