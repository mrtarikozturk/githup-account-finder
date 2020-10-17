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
        ui.showMessage('Please enter a valid username...');
    } else {
        github.getData(username)
            .then(response => {
                if (response.user.message === 'Not Found') {
                    ui.showMessage("Can't find username");
                } else {
                    if (Storage.add(username)) ui.addUserName(username);
                    ui.displayUserInfo(response.user);
                    ui.displayRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showMessage(err));
    }

    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched() {


}

function getAllSearched() {

    Storage.get().forEach(item => ui.addUserName(item));
}
