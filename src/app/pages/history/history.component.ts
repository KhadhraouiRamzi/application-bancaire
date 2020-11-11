import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compte } from 'src/app/models/compte';
import { Transaction } from 'src/app/models/transaction';
import { ComptesService } from 'src/app/services/comptes.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  transactions : Transaction[]=[];
  c : Compte;


  constructor(private s : ComptesService, private r : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.r.snapshot.paramMap.get("id");
    this.c=this.s.getCompteById(parseInt(id));
    this.transactions = this.s.getTransactionsCompte(parseInt(id));
  }

}
