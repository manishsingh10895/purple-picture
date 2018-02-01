const
    router = require('express').Router(),
    Task = require('../models/task.model');


class TaskRoutes {
    static Post(req, res) {
        let details = req.body;

        Task.create(details, (err, task) => {
            if(err) return res.status(400).json(err);

            res.json(task);
        });
    }

    static Delete(req, res) {
        let id = req.param.id;

        Task.remove({ _id: id }, (err, res) => {
            if(err) return res.status(400).json(err);

            res.sendStatus(204);
        });
    }

    static Update(req, res) {
        let id = req.param.id;

        let taskDetails = req.body;

        Task.update({ _id: id }, taskDetails, (err, task) => {
            if(err) return res.status(400).json(err);

            res.json(task);
        });
    }

    static Get(req, res) {
        let id = req.param.id;

        if(id) {
            Task.findOne({ _id: id }, (err, task) => {
                if(err) return res.status(400).json(err);
                
                res.sendStatus(204);
            });
        } else {
            Task.find({}, (err, tasks) => {
                if(err) return res.status(400).json(err);
                
                res.json(tasks);
            });
        }
    }
}


router.get('/:id', TaskRoutes.Get);
router.get('/', TaskRoutes.Get);
router.post('/', TaskRoutes.Post);
router.put('/:id', TaskRoutes.Update);
router.delete('/:id', TaskRoutes.Delete);

module.exports = (app) => {
    app.use('/tasks', router);
};