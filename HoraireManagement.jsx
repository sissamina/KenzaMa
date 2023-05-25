import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

const HoraireManagement = () => {
  const [horaires, setHoraires] = useState([]);
  const [heureMatinEntree, setHeureMatinEntree] = useState('');
  const [heureMatinSortie, setHeureMatinSortie] = useState('');
  const [tempsAutoriseMatin, setTempsAutoriseMatin] = useState('');
  const [heureApresMidiEntree, setHeureApresMidiEntree] = useState('');
  const [heureApresMidiSortie, setHeureApresMidiSortie] = useState('');
  const [tempsAutoriseApresMidi, setTempsAutoriseApresMidi] = useState('');
  const [tempsAutoriseSortieTot, setTempsAutoriseSortieTot] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const resetForm = () => {
    setHeureMatinEntree('');
    setHeureMatinSortie('');
    setTempsAutoriseMatin('');
    setHeureApresMidiEntree('');
    setHeureApresMidiSortie('');
    setTempsAutoriseApresMidi('');
    setTempsAutoriseSortieTot('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
    setEditIndex(null);
  };

  const handleAddHoraire = () => {
    const horaire = {
      heureMatinEntree,
      heureMatinSortie,
      tempsAutoriseMatin,
      heureApresMidiEntree,
      heureApresMidiSortie,
      tempsAutoriseApresMidi,
      tempsAutoriseSortieTot,
    };
    setHoraires([...horaires, horaire]);
    setShowModal(false);
    resetForm();
  };

  const handleEditHoraire = (index) => {
    const horaire = horaires[index];
    setHeureMatinEntree(horaire.heureMatinEntree);
    setHeureMatinSortie(horaire.heureMatinSortie);
    setTempsAutoriseMatin(horaire.tempsAutoriseMatin);
    setHeureApresMidiEntree(horaire.heureApresMidiEntree);
    setHeureApresMidiSortie(horaire.heureApresMidiSortie);
    setTempsAutoriseApresMidi(horaire.tempsAutoriseApresMidi);
    setTempsAutoriseSortieTot(horaire.tempsAutoriseSortieTot);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleUpdateHoraire = () => {
    const updatedHoraires = [...horaires];
    const horaire = {
      heureMatinEntree,
      heureMatinSortie,
      tempsAutoriseMatin,
      heureApresMidiEntree,
      heureApresMidiSortie,
      tempsAutoriseApresMidi,
      tempsAutoriseSortieTot,
    };
    if (editIndex !== null) {
      updatedHoraires[editIndex] = horaire;
      setHoraires(updatedHoraires);
    }
    setShowModal(false);
    resetForm();
    setEditIndex(null);
  };

  const handleDeleteHoraire = (index) => {
    const updatedHoraires = [...horaires];
    updatedHoraires.splice(index, 1);
    setHoraires(updatedHoraires);
  };

  return (
    <div>
        <h3 className='text-center'>Creation d'Horaire</h3>
        <div className="d-grid gap-2 col-2 mx-auto">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Ajouter Horaire
      </Button>
      </div>
      <Table striped bordered hover>
        <thead>
       
          <tr className='bg-warning'> 
            <th>Heure Matin Entrée</th>
            <th>Heure Matin Sortie</th>
            <th>Temps Autorisé Matin (min)</th>
            <th>Heure Après-Midi Entrée</th>
            <th>Heure Après-Midi Sortie</th>
            <th>Temps Autorisé Après-Midi (min)</th>
            <th>Temps Autorisé Sortie Tot (min)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map((horaire, index) => (
            <tr key={index}>
              <td>{horaire.heureMatinEntree}</td>
              <td>{horaire.heureMatinSortie}</td>
              <td>{horaire.tempsAutoriseMatin}</td>
              <td>{horaire.heureApresMidiEntree}</td>
              <td>{horaire.heureApresMidiSortie}</td>
              <td>{horaire.tempsAutoriseApresMidi}</td>
              <td>{horaire.tempsAutoriseSortieTot}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditHoraire(index)}>
                  Modifier
                </Button>
                <Button variant="danger" onClick={() => handleDeleteHoraire(index)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter/Modifier Horaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="heureMatinEntree">
              <Form.Label>Heure Matin Entrée</Form.Label>
              <Form.Control
                type="text"
                placeholder="HH:MM"
                value={heureMatinEntree}
                onChange={(e) => setHeureMatinEntree(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="heureMatinSortie">
              <Form.Label>Heure Matin Sortie</Form.Label>
              <Form.Control
                type="text"
                placeholder="HH:MM"
                value={heureMatinSortie}
                onChange={(e) => setHeureMatinSortie(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="tempsAutoriseMatin">
              <Form.Label>Temps Autorisé Matin (min)</Form.Label>
              <Form.Control
                type="number"
                placeholder="HH:MM"
                value={tempsAutoriseMatin}
                onChange={(e) => setTempsAutoriseMatin(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="heureApresMidiEntree">
              <Form.Label>Heure Après-Midi Entrée</Form.Label>
              <Form.Control
                type="text"
                placeholder="HH:MM"
                value={heureApresMidiEntree}
                onChange={(e) => setHeureApresMidiEntree(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="heureApresMidiSortie">
              <Form.Label>Heure Après-Midi Sortie</Form.Label>
              <Form.Control
                type="text"
                placeholder="HH:MM"
                value={heureApresMidiSortie}
                onChange={(e) => setHeureApresMidiSortie(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="tempsAutoriseApresMidi">
              <Form.Label>Temps Autorisé Après-Midi (min)</Form.Label>
              <Form.Control
                type="number"
                placeholder="HH:MM"
                value={tempsAutoriseApresMidi}
                onChange={(e) => setTempsAutoriseApresMidi(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="tempsAutoriseSortieTot">
              <Form.Label>Temps Autorisé Sortie Tot (min)</Form.Label>
              <Form.Control
                type="number"
                placeholder="HH:MM"
                value={tempsAutoriseSortieTot}
                onChange={(e) => setTempsAutoriseSortieTot(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {editIndex !== null ? (
            <Button variant="primary" onClick={handleUpdateHoraire}>
              Modifier
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddHoraire}>
              Ajouter
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HoraireManagement;
/*import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

const HoraireManagement = () => {
  const [horaires, setHoraires] = useState([]);
  const [heureMatinEntree, setHeureMatinEntree] = useState('');
  //const[ tempsAutoriseME, setTempsAutoriseME] = useState('');
  const [heureMatinSortie, setHeureMatinSortie] = useState('');
  const [ecartAutoriseMatinSortie, setEcartAutoriseMatinSortie] = useState('');
  const[ecartAutoriseMatinTot, setEcartAutoriseMatinTot] = useState('');
  const [heureApresMidiEntree, setHeureApresMidiEntree] = useState('');
  const [ ecartAutoriseApresMidiE, setEcartAutoriseApresMidiE]= useState('');
  const [heureApresMidiSortie, setHeureApresMidiSortie] = useState('');
 // const[ecartAutoriseApresMidiSortie, setEcartAutoriseApresMidiSortie] = useState('');
 
  const [ecartAutoriseSortieTot, setEcartAutoriseSortieTot] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const resetForm = () => {
    setHeureMatinEntree('');
   // setTempsAutoriseME(''),
    setHeureMatinSortie('');
    setEcartAutoriseMatinSortie('');
    setEcartAutoriseMatinTot('');
    setHeureApresMidiEntree('');
    setEcartAutoriseApresMidiE('');
    setHeureApresMidiSortie('');
   // setEcartAutoriseApresMidiSortie(''),
    setEcartAutoriseSortieTot('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
    setEditIndex(null);
  };

  const handleAddHoraire = () => {
    const horaire = {
      heureMatinEntree,
     // tempsAutoriseME,
      heureMatinSortie,
      ecartAutoriseMatinSortie,
      ecartAutoriseMatinTot,
      heureApresMidiEntree,
      ecartAutoriseApresMidiE,
      heureApresMidiSortie,
     // ecartAutoriseApresMidiSortie,
      ecartAutoriseSortieTot,
    };
    setHoraires([...horaires, horaire]);
    setShowModal(false);
    resetForm();
  };

  const handleEditHoraire = (index) => {
    const horaire = horaires[index];
    setHeureMatinEntree(horaire.heureMatinEntree);
   // setTempsAutoriseME(horaire.tempsAutoriseME);
    setHeureMatinSortie(horaire.heureMatinSortie);
    setEcartAutoriseMatinSortie(horaire.ecartAutoriseMatinSortie);
    setEcartAutoriseMatinTot(horaire.ecartAutoriseMatinTot);
    setHeureApresMidiEntree(horaire.heureApresMidiEntree);
    setEcartAutoriseApresMidiE(horaire.ecartAutoriseApresMidiE);
    setHeureApresMidiSortie(horaire.heureApresMidiSortie);
   // setEcartAutoriseApresMidiSortie(horaire.ecartAutoriseApresMidiSortie);
    setEcartAutoriseSortieTot(horaire.ecartAutoriseSortieTot);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleUpdateHoraire = () => {
    const updatedHoraires = [...horaires];
    const horaire = {
      heureMatinEntree,
     // tempsAutoriseME,
      heureMatinSortie,
      ecartAutoriseMatinSortie,
      ecartAutoriseMatinTot,
      heureApresMidiEntree,
      ecartAutoriseApresMidiE,
      heureApresMidiSortie,
     // ecartAutoriseApresMidiSortie,
      ecartAutoriseSortieTot,
    };
    if (editIndex !== null) {
      updatedHoraires[editIndex] = horaire;
      setHoraires(updatedHoraires);
    }
    setShowModal(false);
    resetForm();
    setEditIndex(null);
  };

  const handleDeleteHoraire = (index) => {
    const updatedHoraires = [...horaires];
    updatedHoraires.splice(index, 1);
    setHoraires(updatedHoraires);
  };

  return (
    <div>
        <h3 className='text-center'>Creation d'Horaire</h3>
        <div class="d-grid gap-2 col-2 mx-auto">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Ajouter Horaire
      </Button>
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th colSpan="4">Matin</th>
        </tr>
        
          <tr>
          <th>Heure d'Entrée</th>
       
          <th>Heure de Sortie</th>
          <th>Écart Autorisé (min)</th>
          <th>Heure tôt Matin </th>
          <th>Actions</th>
        </tr>
           
          
        </thead>
        <tbody>
          {horaires.map((horaire, index) => (
            <tr key={index}>
               <td>{horaire.heureMatinEntree}</td>
           
            <td>{horaire.heureMatinSortie}</td>
            <td>{horaire.ecartAutoriseMatinSortie}</td>
              <td>{horaire.ecartAutoriseMatinTot}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditHoraire(index)}>
                  Modifier
                </Button>
                <Button variant="danger" onClick={() => handleDeleteHoraire(index)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="4">Après-midi</th>
        </tr>
        <tr>
          <th>Heure d'Entrée</th>
          <th>Écart Autorisé</th>
          <th>Heure de Sortie</th>
          
          <th>Heure autorisé tôt</th>
        </tr>
      </thead>
      <tbody>
        {horaires.map((horaire, index) => (
          <tr key={index}>
            <td>{horaire.heureApresMidiEntree}</td>
            <td>{horaire.ecartAutoriseApresMidiE}</td>
            <td>{horaire.heureApresMidiSortie}</td>
           
            <td>{horaire.ecartAutoriseSortieTot}</td>
            <td>
                <Button variant="primary" onClick={() => handleEditHoraire(index)}>
                  Modifier
                </Button>
                <Button variant="danger" onClick={() => handleDeleteHoraire(index)}>
                  Supprimer
                </Button>
              </td>
          </tr>
        ))}
      </tbody>
    </Table>

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter Horaire</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="heureMatinEntree">
            <Form.Label>Heure d'Entrée (Matin)</Form.Label>
            <Form.Control
              type="text"
              value={heureMatinEntree}
              onChange={(e) => setHeureMatinEntree(e.target.value)}
            />
          </Form.Group>
       
         
          <Form.Group controlId="heureMatinSortie">
            <Form.Label>Heure de Sortie (Matin)</Form.Label>
            <Form.Control
              type="text"
              value={heureMatinSortie}
              onChange={(e) => setHeureMatinSortie(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="ecartAutoriseMatinSortie">
            <Form.Label>Écart Autorisé (Matin)</Form.Label>
            <Form.Control
              type="text"
              value={ecartAutoriseMatinSortie}
              onChange={(e) => setEcartAutoriseMatinSortie(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="ecartAutoriseMatinSortie">
            <Form.Label>Écart Autorisé (Matin)</Form.Label>
            <Form.Control
              type="text"
              value={ecartAutoriseMatinSortie}
              onChange={(e) => setEcartAutoriseMatinSortie(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="heureApresMidiEntree">
            <Form.Label>Heure d'Entrée (Après-midi)</Form.Label>
            <Form.Control
              type="text"
              value={heureApresMidiEntree}
              onChange={(e) => setHeureApresMidiEntree(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="ecartAutoriseApresMidiE">
            <Form.Label>Écart Autorisé (Après-midi)</Form.Label>
            <Form.Control
              type="text"
              value={ecartAutoriseApresMidiE}
              onChange={(e) => setEcartAutoriseApresMidiE(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="heureApresMidiSortie">
            <Form.Label>Heure de Sortie (Après-midi)</Form.Label>
            <Form.Control
              type="text"
              value={heureApresMidiSortie}
              onChange={(e) => setHeureApresMidiSortie(e.target.value)}
            />
          </Form.Group>
      
        </Form>
      </Modal.Body>
        <Modal.Footer>
          {editIndex !== null ? (
            <Button variant="primary" onClick={handleUpdateHoraire}>
              Modifier
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddHoraire}>
              Ajouter
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HoraireManagement;*/

