const UserAPI = {
    users: [
        {number: 1, mail: "bar@bar.bar", password: "123"},
        {number: 2, mail: "a@a.a", password: "234"},
        {number: 3, mail: "b@b.b", password: "123"},
    ],
    all: function () {
        return this.uesrs
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
                else {
                    reject(new Error("User name or Email is incorrect"));
                }
            }
        });
    }
};

export default UserAPI;