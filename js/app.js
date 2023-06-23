const loadphones = (searchFieldText) => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
}
const displayPhones = phones => {
    console.log(phones);
    const noFound = document.getElementById('no-found');

    if (phones.length === 0) {
        noFound.classList.remove('d-none');
    }
    else {
        noFound.classList.add('d-none');
    }
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col p-4">
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
        
        `;
        phoneContainer.appendChild(div);
    });
    toggleSpinner(false);

}

document.getElementById('btn-search').addEventListener('click', function () {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    loadphones(searchFieldText);
    searchField.value = '';

})

const toggleSpinner = (isSpinning) => {
    const toggleSpinner = document.getElementById('spinner');
    if (isSpinning) {
        toggleSpinner.classList.remove('d-none');
    }
    else {
        toggleSpinner.classList.add('d-none');
    }
}

// loadphones();