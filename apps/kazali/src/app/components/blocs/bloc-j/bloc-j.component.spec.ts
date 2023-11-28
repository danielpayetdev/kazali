import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocJComponent } from './bloc-j.component';

describe('BlocJComponent', () => {
  let component: BlocJComponent;
  let fixture: ComponentFixture<BlocJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocJComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
