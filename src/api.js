export const UserAPI = {
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

export const CakesAPI = {
    cakes: [
        {
            id: 1,
            category: "cake",
            name: "Chocolate Cake",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtutm6NaoBbTY5Vli75zaAWwwDKf7bfPecSBEhMHCvdSS3dJx",
            likes: 1
        },
        {
            id: 2,
            category: "cake",
            name: "Cheese Cake",
            img: "http://img.taste.com.au/JykbG0mr/w643-h428-cfill-q90/taste/2016/11/new-york-cheesecake-40742-1.jpeg",
            likes: 22
        },
        {
            id: 3,
            category: "cake",
            name: "Black Cake",
            img: "https://www.fergusonplarre.com.au/media/catalog/product/cache/1/image/370x/9df78eab33525d08d6e5fb8d27136e95/P/o/Polka-Dot-Shoe-Cake.jpg",
            likes: 123
        },
        {
            id: 4,
            category: "cake",
            name: "White Cake",
            img: "http://images.media-allrecipes.com/userphotos/960x960/4482234.jpg",
            likes: 111
        },
        {
            id: 5,
            category: "cake",
            name: "Oreo Cake",
            img: "http://bakingbites.com/wp-content/uploads/2009/04/cookiecake.jpg",
            likes: 69
        },
        {
            id: 6,
            category: "cake",
            name: "Rainbow Cake",
            img: "https://www.fergusonplarre.com.au/media/catalog/product/cache/1/image/550x/9df78eab33525d08d6e5fb8d27136e95/b/i/birthday-pinata-cake--inside.jpg",
            likes: 2
        },
        {
            id: 7,
            category: "cake",
            name: "Car Cake",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0hYOjFHo5boh_0ULNtd4KG4Je_308pJUJk_505wmgTn8YkPU",
            likes: 10
        },
        {
            id: 8,
            category: "cake",
            name: "Heart Cake",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCyKc8egRAPnAHDqG44hzsnY72YDR20atic_RdTuApAecxaVz",
            likes: 1000
        },
    ],
    all: function () {
        return new Promise((resolve, reject) => {
            if (this.cakes) {
                resolve(this.cakes);
            }
            else {
                reject(new Error("There is no Cakes"));
            }
        });
    },
    get: function (id) {
        return new Promise((resolve, reject) => {
            if (this.cakes[id-1]) {
                resolve(this.cakes[id-1])
            }
            else {
                reject(new Error("Id does not exist!"));
            }
        })

    }
};