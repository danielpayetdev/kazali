import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocTComponent } from './bloc-t.component';

describe('BlocTComponent', () => {
  let component: BlocTComponent;
  let fixture: ComponentFixture<BlocTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
