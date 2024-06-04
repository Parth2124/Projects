function fetch_data(){

   var cityname =  document.getElementById('city').value
   console.log(cityname)
   if(cityname === ""){
    alert("Enter the city name")
   }
   var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=48cd3c3a9df91c6fa46ba572d353d97c&units=metric'
   fetch(url)
   .then(response => response.json())
   .then(data => {
    var resp_code = data['cod']
    if(resp_code === '404'){
        alert('city not found')
    }
    else{
        var cityTemp = data['main']['temp']
        console.log(cityTemp)
        var cityicon = data['weather']['0']['icon']
        console.log(cityicon)

        var icon_url = ' https://openweathermap.org/img/wn/'+cityicon+'@2x.png'

        document.getElementById('result').innerHTML = `<h3> Temperature is : `+cityTemp+ `&deg;C</h3>` + `<img src=`+icon_url+ `>`
       
    }
   })
   }