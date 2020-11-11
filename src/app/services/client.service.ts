import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getCurrentClient() : Client
  {
    let c : Client = new Client();
    c.id = 1;
    c.firstName="Ahmed";
    c.lastName="CHAOUACHI";
    c.email="chaouechi.ahmed@gmail.com";
    c.clientSince = new Date();
    return c;
  }
}
