import { Beneficiaire } from "./beneficiaire";

export class Operation
{
    id : number;
    donneur : string;
    beneficiaire : Beneficiaire;
    dop : Date;
    montant : number;
    idClient : number;
}