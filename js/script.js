const loadCountry = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayData(data.slice(0, 6)))
}

const displayData = (countries) => {
    const allCountriesHTML = countries.map(country => getCountry(country))
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}
// destructuring 
const getCountry = ({name, flags, area, region}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <img src="${flags.png}">
        </div>`;
}

// const getCountry = country => {
//     const {name, flags} = country
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// }


const loadCountry2 = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayData(data))
}
const hideBtn = document.getElementById('hide-btn');
document.getElementById('show-all-btn').addEventListener('click', function(){
    loadCountry2()
    hideBtn.style.display = 'none';
})

loadCountry()

