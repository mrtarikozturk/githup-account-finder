// Elements
const githubForm = document.querySelector('#github-form');
const nameInput = document.querySelector('#githubname');
const clearLastUsers = document.querySelector('#clear-last-users');
const lastUsers = document.querySelector('#last-users');

// EventListeners
githubForm.addEventListener('submit', getData);
clearLastUsers.addEventListener('click', clearAllSearched);
document.addEventListener('DOMContentLoaded', getAllSearched);

//Inits
const github = new Github();
const ui = new UI();

function getData(e) {

    let username = nameInput.value.trim();

    if (username === '') {
        alert('Lutfen gecerli bir kullanici adi giriniz...');
    } else {
        github.getData(username)
            .then(response => {
                if (response.user.message === 'Not Found') {
                    console.log('Hata');
                } else {
                    ui.displayUserInfo(response.user);
                }
            })
            .catch(err => console.log(err));
    }

    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched() {


}

function getAllSearched() {

}
