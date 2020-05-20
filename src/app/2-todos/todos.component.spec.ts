/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from "./todo.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load todos from the server', () => {
  //   let service = TestBed.get(TodoService);
  //   // let service = fixture.debugElement.injector.get(TodoService);
  //
  //   spyOn(service, 'getTodos').and.returnValue(from([[1,2,3]]));
  //   fixture.detectChanges();
  //
  //   expect(component.todos.length).toBe(3);
  // });

  // with async
  it('PROMISE VERSION - should load todos from the server', async(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });
    console.log('EXPECT WAS CALLED');
  }));


  // with fakeAsync and tick
  it('PROMISE VERSION with fakeAsync- should load todos from the server', fakeAsync(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    tick(1); // simulate a passage of tme
    expect(component.todos.length).toBe(3);
    console.log('EXPECT WAS CALLED');
  }));
});
