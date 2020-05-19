import { VoterComponent } from './voter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement;
    // fixture.debugElement // wrapper on fixture.nativeElement
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    // fixture.debugElement.query(By.directive(VoterComponent)).
    // fixture.debugElement.queryAll(By.css('.vote-count'))
    let de = fixture.debugElement.query(By.css('.vote-count')); // de -> Debug Element
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote =1;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // let el: HTMLElement = de.nativeElement;
    // expect(el.className).toContain('highlighted');

    expect(de.classes['highlighted']).toBeTruthy();
  });
});
