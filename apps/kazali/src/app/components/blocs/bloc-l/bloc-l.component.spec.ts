import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocLComponent } from './bloc-l.component';

describe('BlocLComponent', () => {
  let component: BlocLComponent;
  let fixture: ComponentFixture<BlocLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocLComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
