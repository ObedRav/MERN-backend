const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Game = require('../models/Games');
const { errorHandler } = require('../helpers/deberrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err)
        {
            return res.status(400).json({
                error: "Image could not be parsed"
            })
        }

        const { name, description, price, category, quantity } = fields;
        let videogame = new Game(fields);

        // 1MB = 1,000,000 bytes 

        if (files.photo)
        {
            if(files.photo.size > 1000000)
            {
                return res.status(400).json({
                    error: "Image should be less than 1MB in size"
                })
            }
            videogame.photo.data = fs.readFileSync(files.photo.filepath);
            videogame.photo.contentType = files.photo.type;
        }

        videogame.save((err, result) => {
            if (err)
            {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'; 

    Game.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .exec((err, games) => {
            if (err)
            {
                return res.status(400).json({
                    error: "Videogames not found"
                })
            }
            res.json(games);
        })
}

exports.remove = (req, res) => {
    let game = req.game
    game.remove((err, data) => {
        if (err)
        {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Game removed"
        });
    })
}

exports.gameById = (req, res, next, id) => {
    Game.findById(id)
        .populate("category")
        .exec((err, game) => {
            if (err || !game)
            {
                return res.status(400).json({
                    error: "Game not found or doesn't exist"
                })
            }
            req.game = game;
            console.log(req.game)
            next();
        })
}

exports.photo = (req, res, next) => {
 if (req.game.photo.data)
 {
    res.set('Content-Type', req.game.photo.contentType)
    return res.send(req.game.photo.data)
 }
 next();
}