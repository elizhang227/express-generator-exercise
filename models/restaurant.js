const db = require('./conn-restaurant.js');

class Restaurants {
    constructor(id, name, distance, stars, category, fav_dish, takeout) {
        this.id = id;
        this.name = name;
        this.distance = distance;
        this.stars = stars;
        this.category = category;
        this.fav_dish = fav_dish;
        this.takeout = takeout;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from restaurant`);
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async add(name, distance, stars, category, fav_dish, takeout) {
        const query = `INSERT INTO restaurant (name, year) VALUES ('${name}', ${distance}, ${stars}, '${category}', '${fav_dish}', ${takeout})`;

        try {
            let response = await db.result(query)
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }
}

module.exports = Restaurants;