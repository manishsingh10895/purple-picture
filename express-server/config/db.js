module.exports = {
    "production": {
        "uri": process.env.MONGO_URI || "mongodb://mongo:27017/something"
    }, 
    "development": {
        "uri": "mongodb://manish:terminator@ds159707.mlab.com:59707/emaily-dev" 
    }
}