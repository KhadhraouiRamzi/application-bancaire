import { Component, OnInit } from '@angular/core';
import { Beneficiaire } from 'src/app/models/beneficiaire';
import { ClientService } from 'src/app/services/client.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-list-beneficiaires',
  templateUrl: './list-beneficiaires.component.html',
  styleUrls: ['./list-beneficiaires.component.css']
})
export class ListBeneficiairesComponent implements OnInit {

  beneficiaires : Beneficiaire[]=[];

  constructor(private s : OperationService, private sclient : ClientService) { }

  ngOnInit(): void {
    let clt = this.sclient.getCurrentClient();
    console.log(clt);
    this.beneficiaires = this.s.getMesBeneficiaires(clt.id);
  }

}
