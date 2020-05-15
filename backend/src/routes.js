const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const PerfilController = require('./controllers/PerfilController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();
const upload = multer(UploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/perfils', PerfilController.index);
routes.post('/perfils', upload.single('img') , PerfilController.store);

routes.get('/profile', ProfileController.show);

module.exports = routes;