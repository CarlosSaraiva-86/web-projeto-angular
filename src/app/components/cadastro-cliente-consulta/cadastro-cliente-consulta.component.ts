import { Component, NgModule, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { AppService } from 'src/app/services/app-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-cliente-consulta',
  templateUrl: './cadastro-cliente-consulta.component.html',
  styleUrls: ['./cadastro-cliente-consulta.component.css'],
  standalone: true,
  imports:[ MatSlideToggleModule, BrowserModule, MatTableModule, MatButtonModule, MatInputModule, MatFormFieldModule ]
})

export class CadastroClienteConsultaComponent implements OnInit {

  constructor(private appService: AppService) { }
  clientes: Cliente[] = [];
  public cliente!: Cliente;

  displayedColumns: string[] = ['nome', 'cpf'];
  ngOnInit(): void {
  }

  Buscar(){
    this.appService.Get('cliente/ObterTodos').subscribe(result =>{
      this.clientes = result;
    }, (error) => {
      console.log(error);
    }
    );
  }
  Adicionar(event: any){
    this.cliente = new Cliente();
    this.cliente.nome = event.target.nome.value
    this.cliente.cpfCnpj = event.target.cpf.value
    this.appService.Post('cliente/Adicionar', this.cliente).subscribe(() =>{

    }, (err) => {
      console.log(err);
    });
  }
}
