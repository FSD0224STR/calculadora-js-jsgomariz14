let input     = document.getElementById('input')
let buttons   = document.querySelectorAll('button')
let resultado = ''

for (button of buttons) { // Iteramos por cada elemento

    button.addEventListener('click', (e) => { // Agregamos un evento a cada elemento

        buttonText = e.target.innerText // Obtenemos el texto del elemento

        if (buttonText == 'C') { // Si el texto es igual a 'C' entonces limpiamos el input
            resultado   = ''
            input.value = resultado

        } else if (buttonText == '=') { // Si el texto es igual a '=' entonces evaluamos el resultado
            input.value = math.evaluate(resultado)

        } else if (buttonText == '◀️') { // Si el texto es igual a '⬅️' entonces eliminamos el último caracter
            resultado   = resultado.slice(0, -1)
            input.value = resultado

        } else if (buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/') { // Si el texto es un operador entonces concatenamos el texto al resultado
            resultado   += buttonText
            input.value = ''

        } else { // Si no es ninguno de los anteriores entonces concatenamos el texto al resultado
            resultado   += buttonText
            input.value += buttonText
        }
    })
}
