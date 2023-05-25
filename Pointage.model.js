const pointageSchema = new mongoose.Schema({
    identifiant: String,
    nom: String,
    date_entree: Date,
    heure_entree: String,
    date_sortie: Date,
    heure_sortie: String,
    });
    
    const Pointage = mongoose.model("Pointage", pointageSchema);