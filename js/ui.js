class UI {
    constructor() {
        this.profileCard = document.querySelector('#profile');
        this.repoCard = document.querySelector('repos');
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
                        <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
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
}