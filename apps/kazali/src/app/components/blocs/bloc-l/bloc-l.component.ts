import { Component } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';
import { Bloc } from '../../../models/blocs';

@Component({
  selector: 'kazali-bloc-l',
  standalone: true,
  templateUrl: './bloc-l.component.html',
  styleUrl: './bloc-l.component.scss',
})
export class BlocLComponent extends BlocComponent {
  public override readonly bloc: Bloc = [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}
