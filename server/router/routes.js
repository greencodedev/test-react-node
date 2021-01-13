const { getUserData } = require('../api/getData');

const appRouter = (app) => {    
    // route handlers
    app.get('/api/fetch', (req, res) => {
        res.end(JSON.stringify(getUserData()));
    });
};

module.exports = appRouter;