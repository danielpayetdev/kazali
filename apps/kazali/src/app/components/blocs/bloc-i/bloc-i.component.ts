import { Component } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';
import { Bloc } from '../../../models/blocs';

@Component({
  selector: 'kazali-bloc-i',
  standalone: true,
  templateUrl: './bloc-i.component.html',
  styleUrl: './bloc-i.component.scss',
})
export class BlocIComponent extends BlocComponent {
  public override readonly bloc: Bloc = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}