import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiaire } from 'src/app/models/beneficiaire';
import { ClientService } from 'src/app/services/client.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-new-beneficiaire',
  templateUrl: './new-beneficiaire.component.html',
  styleUrls: ['./new-beneficiaire.component.css']
})
export class NewBeneficiaireComponent implements OnInit {

b : Beneficiaire = new Beneficiaire();
   
  constructor(private opService : OperationService, 
    private cltService : ClientService,
    private router : Router) { }

  ngOnInit(): void {
  }

  save()
  {
    let client = this.cltService.getCurrentClient();
    this.b.idClient = client.id;
    this.b.id=9;
    this.opService.addBeneficiaire(this.b);
    this.b = new Beneficiaire();
    this.router.navigate(['/beneficiaries']);
  }

}
