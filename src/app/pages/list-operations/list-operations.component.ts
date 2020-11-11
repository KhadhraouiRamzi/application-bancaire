import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {

  mesOperations = [];
  clt : Client;

  constructor(private sClient : ClientService,
    private sOperation : OperationService) { }

  ngOnInit(): void {
    this.clt = this.sClient.getCurrentClient();
    let me = this.clt.id;
    this.mesOperations=this.sOperation.getMesOperations(me);
  }

}
