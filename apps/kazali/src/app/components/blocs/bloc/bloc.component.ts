import { Component } from '@angular/core';
import { Bloc } from '../../../models/blocs';

@Component({
  selector: 'kazali-bloc',
  standalone: true,
  templateUrl: './bloc.component.html',
  styleUrl: './bloc.component.scss',
})
export abstract class BlocComponent {
  abstract bloc: Bloc;
}
