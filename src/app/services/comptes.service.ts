import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  bdd_comptes: Compte[] = [
    { id: 1, rib: "123456789", createdAt: new Date(), owner: 1, type: "courant", solde:1000 },
    { id: 2, rib: "123456777", createdAt: new Date(), owner: 1, type: "épargne", solde : 550 },
    { id: 3, rib: "123456888", createdAt: new Date(), owner: 2, type: "courant", solde : 300.250 },
  ];


  bdd_transactions : Transaction[] =
  [
    {id:1, label:"dépôt cash", date : new Date(), montant:100,idCompte :1},
    {id:2, label:"retrait cash", date : new Date(), montant:-50,idCompte :1},
    {id:3, label:"retrait dab", date : new Date(), montant:-200,idCompte :2},
    {id:4, label:"réception chèque", date : new Date(), montant:250,idCompte :3},
    {id:5, label:"agios", date : new Date(), montant:-15,idCompte :3}
  ];


  constructor() { }

  getComptesClient(idClient: number): Compte[] {

    return this.bdd_comptes.filter(cpte => cpte.owner === idClient);
  }

  getCompteById(id):Compte
  {
    return this.bdd_comptes.find(c => c.id === id);
  }


  getCompteByRib(rib):Compte
  {
    return this.bdd_comptes.find(c => c.rib === rib);
  }


  getTransactionsCompte(idCompte : number) : Transaction[]
  {
    return this.bdd_transactions.filter (tx => tx.idCompte === idCompte);
  }

  addTransaction(t : Transaction)
  {
    this.bdd_transactions.push(t);
  }


}
