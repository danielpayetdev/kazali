import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocZComponent } from './bloc-z.component';

describe('BlocZComponent', () => {
  let component: BlocZComponent;
  let fixture: ComponentFixture<BlocZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocZComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
