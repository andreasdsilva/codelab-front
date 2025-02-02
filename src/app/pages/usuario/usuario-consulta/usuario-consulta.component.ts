import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { UsuarioService } from '../usuario.service';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';
import { FormControl, FormGroup } from '@angular/forms';
import { FormatIdPipe } from '../../../shared/pipes/format-id.pipe';
import { IUsuarioForm, IUsuario } from '../usuario.interface';
import {
  IFilterField,
  ILabelValue,
} from '../../../shared/interfaces/filter-field.interface';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { TableFiltersComponent } from '../../../shared/components/table-filters/table-filters.component';
import { BaseConsultaComponent } from '../../../shared/classes/base-consulta/base-consulta.component';
import { EmptyRowComponent } from '../../../shared/components/empty-row/empty-row.component';
import { intMask } from '../../../shared/masks/masks';

const actions = [BackActionComponent, AddActionComponent];
const table = [MatTableModule, MatSortModule, MatPaginatorModule];
const pipes = [BoolToTextPipe, FormatIdPipe];
const imports = [
  ...actions,
  ...table,
  ...pipes,
  EmptyRowComponent,
  PageLayoutComponent,
  TableFiltersComponent,
];

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports,
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss',
})
export class UsuarioConsultaComponent extends BaseConsultaComponent<
  IUsuario,
  IUsuarioForm
> {
  displayedColumns: string[] = ['id', 'nome', 'email', 'admin'];

  adminOptions: ILabelValue[] = [
    {
      label: 'Todos',
      value: 0,
    },
    {
      label: 'Sim',
      value: 1,
    },
    {
      label: 'Não',
      value: 2,
    },
  ];

  filterFields: IFilterField[] = [
    {
      type: EFieldType.Input,
      class: 'grid-1',
      label: 'Código',
      formControlName: 'id',
      placeholder: 'Ex.: 1',
      mask: intMask,
    },
    {
      type: EFieldType.Input,
      class: 'grid-2',
      label: 'Nome',
      formControlName: 'nome',
      placeholder: 'Ex.: José',
    },
    {
      type: EFieldType.Input,
      class: 'grid-2',
      label: 'Email',
      formControlName: 'email',
      placeholder: 'Ex.: jose@email.com',
    },
    {
      type: EFieldType.Select,
      class: 'grid-1',
      label: 'Admin',
      formControlName: 'admin',
      placeholder: '',
      options: Promise.resolve(this.adminOptions),
    },
  ];

  filterFormGroup = new FormGroup<IUsuarioForm>({
    id: new FormControl(null),
    nome: new FormControl(null),
    email: new FormControl(null),
    admin: new FormControl(0),
  });

  constructor(private readonly _usuarioService: UsuarioService) {
    super(_usuarioService);
  }
}