import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'tabs-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatListModule, MatButtonModule, MatIconModule, AsyncPipe],
  templateUrl: './tabs-chat.component.html',
  styleUrl: './tabs-chat.component.scss'
})
export class TabsChatComponent {
  user$ = new BehaviorSubject(user)
  users$ = new BehaviorSubject(mockUsers)
  messages$ = new BehaviorSubject(mockUsersMessages)

  textArea = new FormControl();

  submit() {

    const messageData = {
      user: this.user$.value,
      message: this.textArea.value,
      date: (new Date(Date.now())).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric'
      })
    }

    this.textArea.reset();

    this.messages$.next([...this.messages$.value, messageData])


    console.log('\x1b[38;5;102m aaaa: ', 'submit');
  }
}

const user = {
  name: 'Кактус',
  avatar: 'face_2',
  color: '#bb2085'
}

const mockUsers = [
  {
    name: 'Кузко',
    avatar: 'face_2',
    color: '#9b954b'
  },
  {
    name: 'Изма',
    avatar: 'face_4',
    color: '#9898ff'
  },
  {
    name: 'Кронк',
    avatar: 'face_5',
    color: '#4148be'
  },
  {
    name: 'Мэлина',
    avatar: 'face_3',
    color: '#a551ad'
  },
]

const mockUsersMessages = [
  {
    user: {
      name: 'Кронк',
      avatar: 'face_5',
      color: '#4148be'
    },
    message: 'Hello everybody!',
    date: 'Среда, 21:21'
  },
  {
    user: {
      name: 'Изма',
      avatar: 'face_4',
      color: '#9898ff'
    },
    message: 'Жми на рычаг, Кронк!',
    date: 'Среда, 21:23'
  }
]
