import { Component } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';
import { Bloc } from '../../../models/blocs';

@Component({
  selector: 'kazali-bloc-j',
  standalone: true,
  templateUrl: './bloc-j.component.html',
  styleUrl: './bloc-j.component.scss',
})
export class BlocJComponent extends BlocComponent {
  public override readonly bloc: Bloc = [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}