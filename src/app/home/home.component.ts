import { Component } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ChatComponent]
})
export class HomeComponent {

}
