import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocOComponent } from './bloc-o.component';

describe('BlocOComponent', () => {
  let component: BlocOComponent;
  let fixture: ComponentFixture<BlocOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocOComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
