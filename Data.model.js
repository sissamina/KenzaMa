const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');

const app = express();

// Configuration de multer pour gérer l'upload de fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Configuration de la connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Définition d'un modèle de données pour MongoDB
const DataSchema = new mongoose.Schema({
  // Définissez ici la structure des données de votre modèle
});

const DataModel = mongoose.model('Data', DataSchema);

// Configuration de bodyParser pour traiter les requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Définition des routes

// Endpoint pour uploader un fichier Access
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Aucun fichier sélectionné');
  }

  // Lisez le fichier Access et enregistrez les données dans MongoDB
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => {
      const newData = new DataModel(data);
      newData.save();
    })
    .on('end', () => {
      // Supprimez le fichier temporaire après l'importation
      fs.unlinkSync(req.file.path);
      res.status(200).send('Importation terminée');
    });
});

// Endpoint pour récupérer les données de MongoDB
app.get('/data', (req, res) => {
  DataModel.find({}, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(data);
  });
});

// Démarrage du serveur
app.listen(5000, () => {
  console.log('Le serveur est en écoute sur le port 5000');
});
