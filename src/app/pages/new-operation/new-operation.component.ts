import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Compte } from 'src/app/models/compte';
import { Operation } from 'src/app/models/operation';
import { ClientService } from 'src/app/services/client.service';
import { ComptesService } from 'src/app/services/comptes.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.css']
})
export class NewOperationComponent implements OnInit {

  donneurs: Compte[] = [];
  beneficiaires: any[] = [];
  selectedDo: any;
  cltIdInt:number;

  op: Operation = new Operation();

  constructor(private scompte: ComptesService,
    //private sclient : ClientService, // à remplacer par un nouveau de récupération d'id depuis URL
    private ar: ActivatedRoute,
    private sop: OperationService) { }

  ngOnInit(): void {
    // let clt = this.sclient.getCurrentClient();
    let cltId = this.ar.snapshot.paramMap.get("idClient");
    this.cltIdInt = parseInt(cltId);
    this.donneurs = this.scompte.getComptesClient(this.cltIdInt); //clt.id);
    //
    this.setBeneficiaires();
  }

  setBeneficiaires()
  {
    this.beneficiaires=[];
    //
    let mesBeneficiaires = this.sop.getMesBeneficiaires(this.cltIdInt);//clt.id);
    //
    this.donneurs.forEach(d => {
      this.beneficiaires.push({ "text": "Mon compte " + d.rib, "value": d.rib });
    });
    mesBeneficiaires.forEach(b => {
      this.beneficiaires.push({ "text": b.label, "value": b.rib });
    });
  }

  doChange($event) {
    console.log($event);
    //
    this.setBeneficiaires();
    //
    this.beneficiaires = this.beneficiaires.filter(b => b.value !== this.op.donneur);
  }

  checkValidDate($event) {
    console.log($event.target.value);
  }
}
