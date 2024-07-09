const apiKey = '14d1eae1b3bf41c6a6a70e76154d5490';

document.getElementById('address-input').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const suggestions = data.results.map(result => {
                    return `<div class="suggestion-item" data-id="${result.annotations.geohash}">${result.formatted}</div>`;
                }).join('');
                document.getElementById('suggestions').innerHTML = suggestions;
            })
            .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('suggestions').innerHTML = '';
    }
});

document.getElementById('suggestions').addEventListener('click', function(event) {
    if (event.target.classList.contains('suggestion-item')) {
        const selectedAddress = event.target.innerText;
        document.getElementById('address-input').value = selectedAddress;
        document.getElementById('suggestions').innerHTML = '';
    }
});
