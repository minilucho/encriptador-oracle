const textoEntrada = document.getElementById('texto');
const botonEncriptar = document.getElementById('botonencriptar');
const contenedorResultado = document.getElementById('resultado');
const textoSalida = document.getElementById('textoSalida');
const botonCopiar = document.getElementById('botonCopiar');
const botonDesencriptar = document.getElementById('botondesencriptar');


const clavesEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar(texto) {
    return texto.replace(/[eiaou]/g, letra => clavesEncriptacion[letra]);
}

function desencriptar(texto) {
    let desencriptado = texto;
    for (let [clave, valor] of Object.entries(clavesEncriptacion)) {
        desencriptado = desencriptado.replaceAll(valor, clave);
    }
    return desencriptado;
}
function mostrarResultado(texto) {
    contenedorResultado.style.display = 'none';
    textoSalida.style.display = 'block';
    botonCopiar.style.display = 'block';
    textoSalida.value = texto;
}

// Función para validar que el texto solo contenga minúsculas y espacios
function validarEntrada(texto) {
    return /^[a-z\s]*$/.test(texto);
}

// Función para verificar si hay mayúsculas o caracteres especiales
function contieneMayusculasOEspeciales(texto) {
    return /[A-Z]/.test(texto) || /[^a-zA-Z\s]/.test(texto);
}

botonEncriptar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    if (validarEntrada(texto)) {
        mostrarResultado(encriptar(texto));
    } else {
        if (contieneMayusculasOEspeciales(texto)) {
            alert("El texto contiene mayúsculas o caracteres especiales. Solo se aceptan letras minúsculas y espacios.");
        } else {
            alert("Texto inválido. Solo se aceptan letras minúsculas y espacios.");
        }
    }
});

// Escucha de eventos para el botón de desencriptar
botonDesencriptar.addEventListener('click', () => {
    const texto = textoEntrada.value;
    if (validarEntrada(texto)) {
        mostrarResultado(desencriptar(texto));
    } else {
        if (contieneMayusculasOEspeciales(texto)) {
            alert("El texto contiene mayúsculas o caracteres especiales. Solo se aceptan letras minúsculas y espacios.");
        } else {
            alert("Texto inválido. Solo se aceptan letras minúsculas y espacios.");
        }
    }
});

function borrarTexto(){
    textoSalida.value="";
    textoEntrada.value="";
}


botonCopiar.onclick = copiarMensaje;
    
function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        alert("Mensaje copiado");
        borrarTexto();
    }
} 





