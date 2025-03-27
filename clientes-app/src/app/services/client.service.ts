// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    // Dados iniciais de exemplo (opcional)
    { id: this.generateId(), nome: 'João Silva', idade: 30, tipo: 'regular', ativo: true },
    { id: this.generateId(), nome: 'Maria Souza', idade: 25, tipo: 'vip', ativo: true }
  ];

  constructor() {}

  getClients(): Client[] {
    return this.clients;
  }

  addClient(client: Omit<Client, 'id'>): void {
    const newClient = {
      id: this.generateId(),
      ...client
    };
    this.clients.push(newClient);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}