import { Injectable } from '@angular/core';
import { Beneficiaire } from '../models/beneficiaire';
import { Compte } from '../models/compte';
import { Operation } from '../models/operation';
import { Transaction } from '../models/transaction';
import { ComptesService } from './comptes.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private scompte: ComptesService) { }

  bdd_beneficiaires: Beneficiaire[] = [
    { id: 1, label: 'TTC', rib: '14714788', idClient: 1 },
    { id: 2, label: 'Maman', rib: '22558899', idClient: 2 }
  ]


  bdd_operations: Operation[] = [
    {
      id: 1, dop: new Date(), montant: -150, donneur: '123456789', idClient: 1,
      beneficiaire: { id: 1, label: 'TTC', rib: '14714788', idClient: 1 }
    },

    {
      id: 2, dop: new Date(), montant: -200, donneur: '123456888', idClient: 2,
      beneficiaire: { id: 2, label: 'Maman', rib: '22558899', idClient: 2 }
    }

  ]


  getMesBeneficiaires(idClient: number): Beneficiaire[] {
    console.log(idClient);
    let liste =  this.bdd_beneficiaires.filter(b => b.idClient === idClient);
    console.log(liste);
    return liste;
  }

  addBeneficiaire(b: Beneficiaire) {
    this.bdd_beneficiaires.push(b);
  }

  doOperation(o: Operation) {
    this.bdd_operations.push(o);
    //
    // 2ème partie
    let c: Compte = this.scompte.getCompteByRib(o.donneur);
    //
    let t: Transaction = {
      id: 100, montant: o.montant, date: o.dop,
      label: 'Virement Online - ' + o.beneficiaire.label,
      idCompte: c.id
    }; // new Transaction();
    //
    this.scompte.addTransaction(t);
  }


  getMesOperations(idClient: number): Operation[] {
    console.log(idClient);
    let liste =  this.bdd_operations.filter(b => b.idClient === idClient);
    console.log(liste);
    return liste;
  }

}
