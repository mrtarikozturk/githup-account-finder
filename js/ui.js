class UI {
    constructor() {
        this.profileCard = document.querySelector('#profile');
        this.repoCardContainer = document.querySelector('#repos');
        this.lastUsersElement = document.querySelector('#last-users');
        this.inputElement = document.querySelector('#githubname');
        this.modalMessageElement = document.querySelector('.modal-body');
        this.modal = document.querySelector('#exampleModal');
    }

    clearInput() {
        this.inputElement.value = '';
    }

    displayUserInfo(user) {
        this.profileCard.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                        <img class="img-fluid mb-2 rounded-circle" src="${user.avatar_url}"> </a>
                        <hr>
                        <div id="fullName"><strong>${user.name}</strong></div>
                        <hr>
                        <div id="bio">${user.bio}</div>
                    </div>
                    <div class="col-md-8">
                        <button class="btn btn-secondary">Takipçi <span class="badge badge-light">${user.followers}</span></button>
                        <button class="btn btn-info">Takip Edilen <span class="badge badge-light">${user.following}</span></button>
                        <button class="btn btn-danger">Repolar <span class="badge badge-light">${user.public_repos}</span></button>
                        <hr>
                        <ul class="list-group">
                            <li class="
                            list-group-item borderzero">
                                <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>                                    
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                            </li>
                            <li class="list-group-item borderzero">
                                <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        `;
    }

    showMessage(message) {
        this.modalMessageElement.textContent = message;
        $('#exampleModal').modal('show')
    }

    displayRepoInfo(repos) {
        this.repoCardContainer.innerHTML = '';

        repos.forEach(repo => {
            this.repoCardContainer.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <a href="${repo.html_url}" target="_blank" id="repoName"></a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar <span class="badge badge-light" id="repoStar"></span>
                            </button>
                            <button class="btn btn-info">
                                Forklar<span class="badge badge-light" id="repoFork"></span>
                            </button>
                        </div>
                    </div>
                </div>
            
            `;
        });
    }

    addUserName(userName) {

        this.lastUsersElement.innerHTML += `
        <li class="list-group-item">${userName}</li>
        `;
    }

    clearAll() {
        while (this.lastUsersElement.firstElementChild !== null)
            this.lastUsersElement.firstElementChild.remove();
    }

}