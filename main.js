const form = document.getElementById('main-form');
const valor1 = document.getElementById('number-a');
const valor2 = document.getElementById('number-b');
let formevalido = false;



function maiorque(num1, num2) 
    {
    return num2 >num1
    }
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelector('#error-message').style.display = 'none'
        document.querySelector('#confirmation-message').style.display = 'none'
        valor2.style.border= ' 1px solid grey';

            formevalido = maiorque(valor1.value, valor2.value);
            if (formevalido)
            {

                const mensagemdesuccesso = `O valor ${valor2.value} é maior que ${valor1.value}. Sucesso!`;
                const containersucesso= document.querySelector('#confirmation-message');
                containersucesso.style.display ='block';
                containersucesso.innerHTML= mensagemdesuccesso;
    
                valor1.value=" ";
                valor2.value=" ";

            }
            else{
            valor2.style.border= '1px solid red';
            document.querySelector('#error-message').style.display = 'block'
            valor1.value=" ";
            valor2.value=" ";

                }
});
