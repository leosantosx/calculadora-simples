const $campoResultado = document.querySelector('.campo-resultado');
const $botoes = document.querySelectorAll('div button');
const $botaoCalcula = document.querySelector('.botao-calcula');
const $botaoLimparCampo = document.querySelectorAll('.limpar-campo');
const $botaoDeleta = document.querySelector('.deleta')

$botoes.forEach(botao => {
    botao.addEventListener('click', insereDadosNoCampo);
});

$botaoCalcula.addEventListener('click', () => {
    let valoresJaDigitado = $campoResultado.getAttribute('placeholder');
    valoresJaDigitado = valoresJaDigitado.split(' ');
    valoresJaDigitado = parseExpressao(valoresJaDigitado);
    console.log(valoresJaDigitado);
    valoresJaDigitado.pop();
    valoresJaDigitado = valoresJaDigitado.join('');
    const resultado = eval(valoresJaDigitado);
    $campoResultado.setAttribute('placeholder', resultado);
})

$botaoLimparCampo.forEach(botao => {
    botao.addEventListener('click', () => {
        $campoResultado.setAttribute('placeholder', '0');
    })
})

$botaoDeleta.addEventListener('click', () => {
    const valores = [...$campoResultado.getAttribute('placeholder')];
    const valorCampo = valores.filter(x => x.trim());
    valorCampo.pop();
    $campoResultado.setAttribute('placeholder', valorCampo.join(' '));
    
    if(valorCampo.length == 0){
        $campoResultado.setAttribute('placeholder', '0');
    }
    
})

function parseExpressao(valores){
    const arrayParseado = [];
    valores.forEach(valor => {
        if(valor == ',') valor = '.';
        if(valor == '÷') valor = '/';
        if(valor == 'x') valor = '*';
        if(valor == '%') valor = '/100';
        arrayParseado.push(valor);
    })
    return arrayParseado;
}
 
function isNumber(value){
   return typeof value === 'number' && isFinite(value);
}

function insereDadosNoCampo(){
    let valoresJaDigitado = $campoResultado.getAttribute('placeholder');

    if(valoresJaDigitado == 0){
        valoresJaDigitado = this.textContent;
        $campoResultado.setAttribute('placeholder', `${valoresJaDigitado}`);
    }else{
        $campoResultado.setAttribute('placeholder', 
        `${valoresJaDigitado} ${this.textContent}`);
    }
}