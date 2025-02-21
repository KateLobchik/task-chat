import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TabsChatComponent} from "./components/tabs-chat/tabs-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-chat';
}
