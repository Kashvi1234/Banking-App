document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country-select');
    const selectedCountriesContainer = document.getElementById('selected-countries');

    const apiEndpoint = 'https://restcountries.com/v3.1/all';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const countryNames = data.map(country => country.name.common).sort();
            countryNames.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        
        if (!document.getElementById(selectedCountry)) {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.id = selectedCountry;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${selectedCountry}-checkbox`;
            checkbox.name = 'nationality';
            checkbox.value = selectedCountry;
            checkbox.checked = true;

            const label = document.createElement('label');
            label.htmlFor = `${selectedCountry}-checkbox`;
            label.textContent = selectedCountry;

            countryDiv.appendChild(checkbox);
            countryDiv.appendChild(label);
            selectedCountriesContainer.appendChild(countryDiv);

            checkbox.addEventListener('change', () => {
                if (!checkbox.checked) {
                    selectedCountriesContainer.removeChild(countryDiv);
                }
            });
        }
    });
});
