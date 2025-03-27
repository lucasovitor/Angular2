// src/app/components/client-list/client-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone:false
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'idade', 'tipo', 'ativo'];
  dataSource: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
    console.log(this.clientService.getClients())
  }

  loadClients(): void {
    this.dataSource = this.clientService.getClients();
  }
}