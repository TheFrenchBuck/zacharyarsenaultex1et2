import './ButtonAjouter.scss';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export default function ButtonAjouter() { 
    return(
        <div className="addIcon">
        <Fab color="secondary" aria-label="add">
            <AddIcon />
    </Fab>
    </div>
    );

}