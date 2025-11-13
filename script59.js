async function weatherForcast(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        }, 2000)
    })

    let chandigarhWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 deg")
        }, 5000)
    })

    console.log("Fetching")
    let delhiw = await delhiWeather
    console.log("Delhi weather: "+delhiw)

    console.log("Fetching")
    let chdw = await chandigarhWeather
    console.log("Chandigard weather: "+chdw)

    return true//[delhiw,chdw]
}

let a = weatherForcast()
a.then((x)=>{
    console.log(x)
})

// console.log(a)