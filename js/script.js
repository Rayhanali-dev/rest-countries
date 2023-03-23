let showData = 9;
let allData;
const loadCountry = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (countries) => {
    const allCountriesHTML = countries.map(country => getCountry(country))
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.slice(0, showData).join(' ');
    allData = allCountriesHTML;
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

const hideBtn = document.getElementById('hide-btn');
const previous = document.getElementsByClassName('show-less')[0];
document.getElementById('show-all-btn').addEventListener('click', function(){

    showData += 9;
    loadCountry();
    if (showData >= allData.length) {
        hideBtn.style.display = 'none';
        previous.style.display = 'block';
    }
})

document.getElementById('previous').onclick = () => {
    showData -= 9;

    if (showData <= 9) {
        showData = 9;
        hideBtn.style.display = 'block';
        previous.style.display = 'none';
    }
    loadCountry();
}

loadCountry()

