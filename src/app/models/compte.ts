

export class Compte
{
    id : number;
    rib : string;
    createdAt : Date;
    type : string;

    owner : number; // id du client propriétaire
    solde : number;

}
