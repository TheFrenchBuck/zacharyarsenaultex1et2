import './Signet.scss';
import { Fab } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Signet(props) {
    
    
    
   
    return (
        <article className="signet">
            
            <img src={"images/" + props.img + ".jpg"} alt={props.nom} />
            <div className={props.couleur}>
            <div className="titre">{props.nom}</div> 
            <div className="date">Modifié: {props.date}</div>
            <div className="signets-icones">
            <div className="sort-icon"><Fab size="small"><SortIcon  /></Fab></div>
            <div className="info-icone">
             <Fab size="small"  aria-label="MoreVert">
             <MoreVertIcon />
             </Fab>
           </div>
           </div>
            

            
           </div>
        </article>
    );
}