// Seleciona o visor da calculadora
const display = document.getElementById('display');

// Adiciona números ou operadores ao visor
function aparecerNoVisor(valor) {
    // Se o visor estiver com "0" ou "Erro", limpa antes de digitar novo número
    if (display.value === "0" || display.value === "Erro") {
        display.value = valor;
    } else {
        display.value += valor;
    }
}

// Limpa todo o visor (Botão C)
function limparVisor() {
    display.value = "";
}

// Apaga apenas o último caractere digitado (Botão DEL)
function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

// Faz a conta mágica acontecer
function calcular() {
    try {
        // eval() lê a string no visor (ex: "2+5*3") e resolve matematicamente
        // Se a conta for válida, mostra o resultado
        // Se for inválida (ex: "5++2"), cai no bloco catch
        const resultado = eval(display.value);
        
        // Verifica se o resultado é um número válido (evita divisão por zero infinita)
        if (!isFinite(resultado)) {
            display.value = "Erro";
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = "Erro";
    }
}