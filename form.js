const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',  validarDatos)

function validarDatos(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const calle = document.getElementById("calle").value
    const numero = document.getElementById("nDeCalle").value

    console.log(nombre, apellido, email, calle, numero)

    localStorage.setItem('Datos de envio', JSON.stringify(`
    Nombre: ${nombre}
    Apellido: ${apellido} 
    E-mail: ${email}
    Calle: ${calle}
    N°: ${numero}
    `))
}



