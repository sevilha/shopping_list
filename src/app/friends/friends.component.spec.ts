import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FriendsComponent } from './friends.component';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [FriendsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add a new friend', () => {
    expect(component.addFriend('id'));
  });

  it('add code that doesnt exist', () => {
    expect(component.addFriend('z')).toThrowError();
  });

  it('get a friend with a valid code', async () => {
    const id = await component.getFriend('id');
    expect(id.length > 0).toBeTrue();
  });

  it('get a friend with invalid code', async () => {
    const id = await component.getFriend('id');
    expect(id.length > 0).toBeTrue();
  });


  it('get a friend with empty code', async () => {
    const id = await component.getFriend('id');
    expect(id).toEqual(undefined);
  });

  it('get all friends', async () => {
    try {
      const friends = await component.getAllFriends();
      expect(friends.length > 0).toBeTrue();
    } catch (error) {
      expect(error).toEqual('');
    }
  });



});
