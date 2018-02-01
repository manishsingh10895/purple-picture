const
    express = require('express'),
    config = require('./config'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    cors = require('cors'),
    passportConfig = require('./services/passport'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    app = express();
    
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: 'seomthing',
    keys: [config.auth.COOKIE_KEY]
}));

app.use(cors());

app.use(passport.initialize());

app.use(passport.session());

mongoose.connect(config.db.uri);

let db = mongoose.connection;

db.on('open', () => {
    console.log('Db connection successfull');
});

require('./services/passport');

//Routes
require('./routes/auth.routes')(app);
require('./routes/task.routes')(app);

app.get('/hello', (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(port, () => {
    console.log("Server running on port" + port);
});

