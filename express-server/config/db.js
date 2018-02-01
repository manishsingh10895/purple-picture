module.exports = {
    "production": {
        "uri": process.env.MONGO_URI || "mongodb://database:27017/something"
    }, 
    "development": {
        "uri": "mongodb://manish:terminator@ds159707.mlab.com:59707/emaily-dev" 
    },
    "test": {
        "uri": "mongodb://localhost:27017/email-test"
    }
}