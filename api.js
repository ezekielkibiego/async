async function fetchCountriesData() {
    try {
        const response = await fetch('https://restcountries.com/v3/all');
        console.log('response', response);
        const data = await response.json();
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchCountriesData()
.then(data => {
    console.log('Countries data:', data);
})
.catch(error => {
    console.log('Error:', error);
})