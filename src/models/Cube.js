const fs = require('fs/promises');
const db = require('../database.json')
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel; 
    }

   save(){
        this.id = db.cubes[db.cubes.lenght - 1].id + 1;
        db.cubes.push(this);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFile(path.resolve(__dirname, '../database.json'), jsonData);
    }
}

module.exports = Cube;