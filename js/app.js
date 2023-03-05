// Do Not show API KEY on your Js file
const API_KEY =`cc15c8560774c40200f826bc70ceeb7f`;

const loadTemparature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
}

const displayTemp = data =>{

    setInnerText('temp',data.main.temp )
    setInnerText('Clouds',data.weather[0].main)

    // console.log(data.weather[0].main);
}

const setInnerText = (id, text) =>{
    const temp = document.getElementById(id);
    temp.innerText = text;

}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('Search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city ;
    loadTemparature(city);
    searchField.value = "";
})

loadTemparature('dhaka');
