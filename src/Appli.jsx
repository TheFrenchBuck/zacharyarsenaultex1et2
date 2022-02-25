import './Appli.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListSignets from './ListeSignet';
import ButtonAjouter from './ButtonAjouter';
// Dans package.JSON ne pas ounlier de remetre le bon lien et enlever Inactif pour le mettre sur gitpages
//"homepage-inactif": "https://code-utilisateur.github.io/nom-de-depot-github/"
export default function Appli() {
  
  
  

  return (
      <div className="Appli">
        <Entete/>
        <ListSignets/>
        <PiedPage />
        <ButtonAjouter/>
      </div>
     );
}
    
