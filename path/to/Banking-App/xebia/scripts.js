function editInfo(sectionId) {
    const section = document.getElementById(sectionId);
    const spans = section.querySelectorAll('span');
    
    spans.forEach(span => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.innerText;
        span.parentNode.replaceChild(input, span);
    });
    
    const button = section.previousElementSibling.querySelector('button');
    button.textContent = 'Save information';
    button.onclick = function() {
        saveInfo(sectionId);
    };
}

function saveInfo(sectionId) {
    const section = document.getElementById(sectionId);
    const inputs = section.querySelectorAll('input');
    
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.innerText = input.value;
        input.parentNode.replaceChild(span, input);
    });
    
    const button = section.previousElementSibling.querySelector('button');
    button.textContent = 'Edit information';
    button.onclick = function() {
        editInfo(sectionId);
    };
}
