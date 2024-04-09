var lampada = window.document.getElementById('lampada')
function ligarlampada(){
    lampada.src= 'l-acesa.svg'
}
function desligarlampada(){
    lampada.setAttribute('src','l-apagada.svg');
}
function lampadaquebrada(){
    lampada.setAttribute('src','l-quebrada.svg');
}