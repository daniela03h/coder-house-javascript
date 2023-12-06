const Carro = function(marca, modelo, kilometraje){
    this.marca = marca
    this.modelo = modelo
    this.kilometraje = kilometraje
  }
  
  let carro1 = new Carro("mazda", 2022, 20000) 
  let carro2 = new Carro("kia", 2016, 55000) 
  let carro3 = new Carro("volkswagen", 2020, 25000) 
  let carro4 = new Carro("chevrolet", 2015, 75000) 
  let carro5 = new Carro("mercedes", 2024, 0) 
  
  let listaCarros = [carro1, carro2, carro3, carro4, carro5]

  if(localStorage.getItem("carros")){
    listaCarros = JSON.parse(localStorage.getItem("carros"))
  } else{
    listaCarros = listaCarros
  }

  function filtrarCarros(){
    let body = document.querySelector("body")
    let input = document.getElementById("filtrarPorMarca").value
    const marcaCarro = input.trim().toUpperCase()
    let resultado = listaCarros.filter((carro) => carro.marca.toUpperCase().includes(marcaCarro))

    if(resultado.length > 0){
        const contenedor = document.createElement("div")
        resultado.forEach((carro) => {
              const tarjeta = document.createElement("div")


            const marca = document.createElement("h3")
            marca.textContent =  `Marca: ${carro.marca}`
            tarjeta.appendChild(marca)

            const modelo = document.createElement("p")
            modelo.textContent = `Modelo: ${carro.modelo}`
            tarjeta.appendChild(modelo)

            const kilometraje = document.createElement("p")
            kilometraje.textContent = `Kilometraje: ${carro.kilometraje}` 
            tarjeta.appendChild(kilometraje)

            contenedor.appendChild(tarjeta)
        })

        body.appendChild(contenedor)
      } else{
        alert("No tenemos esa marca de carro")
      }

  }
  
const botonParaFiltrar = document.getElementById("filtrar")
botonParaFiltrar.addEventListener("click", filtrarCarros)

function agregarCarro(){

    const form = document.createElement('form')
    form.innerHTML = `
    <label for="marca-input">Marca:</label>
    <input id="marca-input" type="text" required>

    <label for="modelo-input">Modelo:</label>
    <input id="modelo-input" type="number" required>

    <label for="kilometraje-input">Kilometraje:</label>
    <input id="kilometraje-input" type="number" required>

    <button type='submit'>Agregar</button>
    `
    
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        
        const marcaInput = document.getElementById('marca-input').value.trim()
        const modeloInput = parseInt(document.getElementById('modelo-input').value)
        const kilometrajeInput = parseInt(document.getElementById('kilometraje-input').value)
        console.log()

        console.log({ marcaInput, modeloInput, kilometrajeInput })
        if(marcaInput === "" || isNaN(modeloInput) || isNaN(kilometrajeInput)){
            alert("Ingresar valores validos")
            return
        }

        const carro = new Carro (marcaInput, modeloInput, kilometrajeInput)

        listaCarros.push(carro)

        localStorage.setItem("carros", JSON.stringify(listaCarros))
        alert(`Se agrego el carro ${carro.marca}`)

        const contenedor = document.createElement("div")
        listaCarros.forEach((carro) => {
              const tarjeta = document.createElement("div")


            const marca = document.createElement("h3")
            marca.textContent =  `Marca: ${carro.marca}`
            tarjeta.appendChild(marca)

            const modelo = document.createElement("p")
            modelo.textContent = `Modelo: ${carro.modelo}`
            tarjeta.appendChild(modelo)

            const kilometraje = document.createElement("p")
            kilometraje.textContent = `Kilometraje: ${carro.kilometraje}` 
            tarjeta.appendChild(kilometraje)

            contenedor.appendChild(tarjeta)
        })

     const body = document.querySelector('body')
     body.appendChild(contenedor)

     form.reset()

    })

    const body = document.querySelector('body')
    body.appendChild(form)
}

const botonParaAgregar = document.getElementById("agregar")
botonParaAgregar.addEventListener("click", agregarCarro)
