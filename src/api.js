const UserAPI = {
    users: [
        {number: 1, mail: "bar@bar.bar", password: "123"},
        {number: 2, mail: "a@a.a", password: "234"},
        {number: 3, mail: "b@b.b", password: "123"},
    ],
    all: function () {
        return this.users
    },
    get: function (id) {
        const isUser = p => p.number === id;
        return this.users.find(isUser)
    },
    login: function (mail, pass) {
        return new Promise((resolve, reject) => {
            for (let user of this.users) {
                if (mail === user.mail && pass === user.password) {
                    resolve(user);
                }
            }
            reject(new Error("Email or Password is incorrect"));
        });
    },
    register: function (mail, pass) {
        return new Promise((resolve, reject) => {
            let index = 0;
            for (let user of this.users) {
                index++;
                if (mail === user.mail) {
                    reject(new Error("Email already exist"));
                }
            }
            this.users.push({number: index, mail: mail, password: pass});
            resolve(this.users[index]);
        });
    }
};

export default UserAPI;