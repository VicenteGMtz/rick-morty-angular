import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCharactersComponent } from './info-characters.component';


describe('InfoCharactersComponent', () => {
  let component: InfoCharactersComponent;
  let fixture: ComponentFixture<InfoCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
