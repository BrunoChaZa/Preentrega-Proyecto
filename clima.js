window.addEventListener('load', () =>{

    let lon
    let lat

    

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
        })

    } 
})




const clima = document.getElementById('temperatura')

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Argentina&lang=es&units=metric&appid=0c8f43093505cff132417103ab629653`)
.then(response => { return response.json() })
.then(data => {
    
    console.log(data)

    let temperatura = data.main.temp
    let descripcion = data.weather[0].description
    let cardClima = document.createElement('div')

    cardClima.innerHTML = `

<div class="clima row">
    <h4>Clima en Kiosko Chaza =)</h4>
    <div class="col-6">
        <h6 >Temperatura: ${temperatura} °C </h6>
    </div>
    <div class="col-6">
        <h6 >Descripcion: ${descripcion}  </h6>
    </div>
</div>
    `
    clima.appendChild(cardClima)

    



})
.catch(err => {
    console.log(err)

})


