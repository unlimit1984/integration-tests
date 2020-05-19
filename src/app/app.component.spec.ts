import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent//,
        //NavComponent // 1st approach
      ],
      schemas: [NO_ERRORS_SCHEMA] //2nd approach
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });


  // should be moved to nav.component.spec.ts if we have a separate app-nav
  // 1st approach is here with separate app-nav component
  // it('should have a link to todos page', () => {
  //   let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  //   let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
  //   expect(index).toBeGreaterThan(-1);
  // });

});
