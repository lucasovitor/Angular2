// src/app/components/client-form/client-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  standalone:false
})
export class ClientFormComponent {
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.clientForm = this.fb.group({
      nome: ['', Validators.required],
      idade: [null, Validators.required],
      tipo: ['regular', Validators.required],
      ativo: [false]
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.clientService.addClient(this.clientForm.value);
      this.snackBar.open('Cliente cadastrado com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.router.navigate(['/list']);
    }
  }
}