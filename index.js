
function getData()
{
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fa9ebae3cmsh524a1994e11af3ap13953ajsn63f83424600e',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
        .then(response => response.json())
        .then(res =>{
            console.log(res);
            temp.innerHTML = res.temp;
            ws.innerHTML = res.wind_speed;
            hmdty.innerHTML = res.humidity;
            

        })
        .catch(err => console.error(err));
}