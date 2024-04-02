import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteConsultaComponent } from './cadastro-cliente-consulta.component';

describe('CadastroClienteConsultaComponent', () => {
  let component: CadastroClienteConsultaComponent;
  let fixture: ComponentFixture<CadastroClienteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroClienteConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClienteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
