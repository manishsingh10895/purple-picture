const
    passport = require('passport'),
    router = require('express').Router();


router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.json(req.user);
});

router.get('/test', (req, res) => {
    console.log(req.body);
    
    res.json({ message: 'message' });
});

router.get('/logout', (req, res) => {
    req.logout();

    res.sendStatus(204);
});

/**
 * Gives integer afte calculating something
 * 
 * @param {String} io 
 * @param {Number} io 
 * 
 * @returns {Number}
 */
let x = (io, ios) => {

}

module.exports = (app) => {
    app.use('/auth', router);
};
