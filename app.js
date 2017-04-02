const form = document.getElementById('weather')
const city = document.getElementById('city')
const country = document.getElementById('country')
const api = 'https://locationiq.org/v1/search.php?key='
const apiKey = 'bfc8af58282de3b06ef2'
 let cityData = []

 const Weather = "https://api.apixu.com/v1/forecast.json?key=a59adf00817045bfbac181939173003&q=";
// var Geolat = []




  function fetch1()
  {
    // e.preventDefault()
    const cityName = city.value
    const countryName = country.value
    
     
       

fetch(`${api}${apiKey}&format=json&city=${cityName}&country=${countryName}`)
 .then((res) => res.json())
  .then((data) => {
    console.log(data)
    // console.log(data[0].display_name)
    // console.log(`the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}`)
    // ...data is a rest operator
    cityData.push(data[0].lon)
    console.log(cityData[0])
    cityData.push(data[0].lat)
    console.log(cityData[1])
    // return cityData
    fetch(`${Weather}${cityData[1]},${cityData[0]}&days=5`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const div = document.getElementById('display')
        const ul = document.createElement('ul')
        ul.textContent= 'Today'
        let temp = data.current.temp_c
        
        
        const li = document.createElement('li')
        li.textContent = 'Condition: '+ data.current.condition.text
        li.id='condition'
        const li1 = document.createElement('li')
        li1.id = 'temp'
        li1.textContent = 'Temperature: '+temp+'°c' 
        
        const img = document.createElement('img')
        img.id = 'conditionimg'
        const img1 = document.createElement('img')
        img1.id = 'tempimg'
        
        img.src='https:'+data.current.condition.icon
        li.appendChild(img)
          ul.appendChild(li)
          div.appendChild(ul)
        
        if (temp<0)
        {
          img1.src='png/051-thermometer-2.png'
          li1.appendChild(img1)
          ul.appendChild(li1)
          
        }
        else if(temp==0)
        {
          img1.src='png/051-thermometer-1.png'
          li1.appendChild(img1)
          ul.appendChild(li1)
          
        }
        else if(0<temp<25)
        {
          img1.src='png/051-thermometer.png'
          li1.appendChild(img1)
          ul.appendChild(li1)
          
        }
        else if(temp>25)
        {
          img1.src='png/051-fire-1.png'
          li1.appendChild(img1)
          ul.appendChild(li1)
          
        }
        div.appendChild(ul)
        
        
        
        
        
        
        
        
        
       
        
        
        
    })
     
     
  })
  
  
  .catch((e) => console.log(e, "what's happening dave?"))

//   console.log('city data array', cityData)
//   return cityData
  
  
  
  }
//   function fetch2()
//   {
    
//     // //   var key = '60a227d22e6fb409'
//     // console.log(cityData)
//     // console.log(cityData[0])
     
//     //   fetch(`${Weather}${cityData[1]},${cityData[0]}`)
//     //   .then((res) => res.json())
//     //   .then((data) =>{
//     //       console.log(data)
//     //   })
//     // //   .catch((e) => console.log(e, "anything"))
//   }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch1()
    // fetch2()
   
    
    
      
    //   console.log(Geolng)
    
//     var key = '60a227d22e6fb409'
// var Weather = "http://api.wunderground.com/api/60a227d22e6fb409/geolookup/conditions/q/IA/Cedar_Rapids.json";

// fetch(`${Weather}${key}&format=jsonp&longitude=${Geolng}&latitude=${Geolat}`)
// .then((res)=> res.json())
// .then((data)=> 
// {
//     console.log(data)
// }
// )
})
  