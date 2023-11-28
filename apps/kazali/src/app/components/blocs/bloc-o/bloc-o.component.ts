import { Component } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';
import { Bloc } from '../../../models/blocs';

@Component({
  selector: 'kazali-bloc-o',
  standalone: true,
  templateUrl: './bloc-o.component.html',
  styleUrl: './bloc-o.component.scss',
})
export class BlocOComponent extends BlocComponent {
  public override readonly bloc: Bloc = [
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}
