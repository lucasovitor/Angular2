// src/app/models/client.model.ts
export interface Client {
    id: string;
    nome: string;
    idade: number;
    tipo: 'regular' | 'vip';
    ativo: boolean;
  }