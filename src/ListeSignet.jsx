import './ListeSignet.scss';
import Signet from './Signet';
import lesSignets from './data/signets.json';

export default function ListeSignets() {
    return(
<section className="ListeSignet">

<div className="Signets">
    {
        lesSignets.map(signet => <Signet   nom={signet.nom} couleur={signet.couleur} date={signet.date} img={signet.img} />)
    }
</div>
</section>
);
}
