let a = fetch('https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current=temperature_2m,wind_speed_10m')
a.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})