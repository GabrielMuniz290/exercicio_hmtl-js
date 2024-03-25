const form = document.getElementById('main-form');
const valor1 = document.getElementById('number-a');
const valor2 = document.getElementById('number-b');
let formevalido = false;

function maiorque(um, dois) {
    if (dois.value > um.value) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemdesuccesso = `O valor ${valor2.value} é maior que ${valor1.value}. Sucesso!`;

    formevalido = maiorque(valor1.value, valor2.value);
    const innermensagemdesucesso = document.querySelector('.confirmation-message');


    if (formevalido) {
        innermensagemdesucesso.innerHTML = mensagemdesuccesso;
        innermensagemdesucesso.style.display = 'block';
    } else {
        innermensagemdesucesso.innerHTML = 'na deu neguin'; // Limpar a mensagem se não for válido
        innermensagemdesucesso.style.display = 'block';
    }
});
