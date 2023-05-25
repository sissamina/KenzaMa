
import  {BrowserRouter,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Gestionemployes from "./pages/Gestionemployes"
import Gestionjustifications from "./pages/Gestionjustifications"
import Jourferie from "./pages/Jourferie"

import Feuilleprésence from "./pages/Feuilleprésence"

import { Slidebar } from './Components/Slidebar';
import  Profil  from './pages/Profil.jsx';
import ImportData from "./pages/ImportData";
import ExportDatabase from "./pages/ExportDatabase";
import Rapport from './pages/Rapport';
import Tableau from './pages/Tableau';

import LogoutButton from "./pages/LogoutButton"

import HoraireManagement from "./pages/HoraireManagement"
import Data from './pages/Data';


function App(){

  
    return(
    
    <div>
      
        <Data/>
    
   </div>
        
      
  
         
     /*   <BrowserRouter >
          <Slidebar>
                 <Switch>
                <Route path="/Profil" element={<Profil/>}/>
                <Route path="/Gestionemployes" element={< Gestionemployes/>}/> 
                <Route path="/Gestionjustifications" element={< Gestionjustifications/>}/>
                <Route path="/Jourferie" element={< Jourferie/>}/>
                <Route path="/HoraireManagement" element={< HoraireManagement/>}/>
                <Route path="/Rapport" element={< Rapport/>}/>
                <Route path="/Feuilleprésence" element={< Feuilleprésence/>}/>
                <Route path="/LogoutButton" element={< LogoutButton/>}/>
                <Route path="/ImportData" element={< ImportData/>}/>
                <Route path="*" element={<> not found</>}/>
                </Switch>
                </Slidebar>

          </BrowserRouter>*/
        
    );
}
export default App;