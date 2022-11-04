const path = require('path')

module.exports = {
    js: (req, res) => {
        res.sendFile(path.join(__dirname,"public/index.js"))
    },

    css: (req, res) => {
        res.sendFile(path.join(__dirname,"public/index.css"))
    },

    home: (req, res) => {
        res.sendFile(path.join(__dirname,"public/index.html"))
    }
}