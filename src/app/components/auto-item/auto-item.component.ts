import { Component, inject, Input } from '@angular/core';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-auto-item',
  imports: [CommonModule],
  templateUrl: './auto-item.component.html',
  styleUrl: './auto-item.component.css'
})
export class AutoItemComponent {
  @Input()
  auto?: Auto;

  carrelloService: CarrelloService = inject(CarrelloService);

  aggiungiACarrello() {
    this.carrelloService.aggiungiACarrello(this.auto!);
  }
}
