import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Item } from './item';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ FormsModule, CommonModule, FlexLayoutModule, MatSelectModule, MatFormFieldModule ],
  templateUrl: './lista.html',
  styleUrl: './lista.scss'
})
export class Lista {
  item: string = "";
  lista: Item[] = [];
  filtro: 'todos' | 'comprados' | 'pendentes' = 'todos';

  editando: boolean = false;
  itemEditando?: Item;

  adicionarItem() {
    const nomeLimpo = this.item.trim();
    if (!nomeLimpo) {
      alert('Digite um nome válido para o item');
      return;
    }

    if (this.editando && this.itemEditando) {
      const confirmar = confirm("Deseja salvar as alterações neste item?");
      if (!confirmar) return;

      this.itemEditando.nome = nomeLimpo;
      this.cancelarEdicao();
      return;
    }

    const itemLista = new Item();
    itemLista.nome = nomeLimpo;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = "";
  }

  editarItem(item: Item) {
    this.editando = true;
    this.itemEditando = item;
    this.item = item.nome!;
  }

  cancelarEdicao() {
    this.editando = false;
    this.itemEditando = undefined;
    this.item = "";
  }

  excluirItem(item: Item) {
    this.lista = this.lista.filter(i => i !== item);
  }

  riscarItem(itemLista: Item) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    const confirmar = confirm("Tem certeza que deseja limpar toda a lista?");
    if (confirmar) {
      this.lista = [];
    }
  }

  get listaFiltrada(): Item[] {
    return this.lista.filter(item => {
      if (this.filtro === 'comprados') return item.comprado;
      if (this.filtro === 'pendentes') return !item.comprado;
      return true;
    });
  }

  trackPorId(index: number, item: Item): number {
    return item.id ?? index;
  }
}
