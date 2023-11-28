import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocIComponent } from './bloc-i.component';

describe('BlocIComponent', () => {
  let component: BlocIComponent;
  let fixture: ComponentFixture<BlocIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
