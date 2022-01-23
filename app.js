const url="https://restcountries.com/v3.1/all"

const search = () => {
    const ele = document.getElementsByClassName("search-btn");
    ele.addEventListener("click", () => {
        console.log('success');
    });
}

const Fun = async () => {
    const resp = await fetch(url);
    let allCountries = await resp.json();
    console.log(allCountries);
    search();
    allCountries.map((country) => {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(country.name.common);
        newDiv.appendChild(newContent);
        newDiv.classList.add('country');
        const currentDiv = document.getElementById("country-info");
        const parentDiv = document.getElementById('All-countries');
        parentDiv.insertBefore(newDiv, currentDiv.nextSibling);
    })
}

const getText = () => {
    // const ele = document.getElementsByClassName("search-txt");
    // const Searchvalue = ele.value;
    // console.log(Searchvalue);
    console.log('success');
}

Fun();
