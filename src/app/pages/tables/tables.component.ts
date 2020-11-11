import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/models/compte';
import { ClientService } from 'src/app/services/client.service';
import { ComptesService } from 'src/app/services/comptes.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  comptes : Compte[];

  constructor(private service : ComptesService,private serviceClient : ClientService,
    private r : Router) { }

  ngOnInit() {
    let client = this.serviceClient.getCurrentClient();
    this.comptes = this.service.getComptesClient(client.id);
  }


  showTransactions(id)
  {
    this.r.navigate(['/history/'+id]);
  }

}
