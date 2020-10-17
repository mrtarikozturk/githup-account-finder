class Storage {
    static get() {
        let users;
        if (localStorage.getItem('users') === null) users = [];
        else users = JSON.parse(localStorage.getItem('users'));

        return users;
    }

    static add(userName) {
        let users = this.get();
        if (users.indexOf(userName) === -1) {
            users.push(userName);
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
    }

    static clear() {
        localStorage.removeItem('users');
    }
}
