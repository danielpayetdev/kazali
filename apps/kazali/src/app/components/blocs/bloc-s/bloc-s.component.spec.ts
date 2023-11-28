import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocSComponent } from './bloc-s.component';

describe('BlocSComponent', () => {
  let component: BlocSComponent;
  let fixture: ComponentFixture<BlocSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocSComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
