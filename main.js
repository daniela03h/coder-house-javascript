// Verificar si es mayor de edad (algoritmo con condicional)

function mayorDeEdad() {
    let edad = prompt('Ingresa tu edad')
    if(edad >= 21 && edad !== ''){
        alert (`Puedes entrar a la Disco porque tienes ${edad}`)
    } else {
        alert (`Lo siento NO puedes entrar a la Disco`)
    } 
}

mayorDeEdad()


// Encontrar si es mayor de edad (algoritmo con ciclo)

let edad = [16, 13, 23, 19]

for (let i = 0; i < edad.length; i++) {
  if(edad[i] >= 21) {
    console.log('Puedes tomar cerveza')
  } else {
    console.log('No puedes tomar cerveza')
  }
}