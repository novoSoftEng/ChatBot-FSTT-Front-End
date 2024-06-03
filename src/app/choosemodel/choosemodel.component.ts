import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatService } from '../chat.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-choosemodel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './choosemodel.component.html',
  styleUrl: './choosemodel.component.css'
})
export class ChoosemodelComponent {
  constructor(private loadingService: LoadingService,private chatService : ChatService){}
  selectModel(model: string) {
    this.loadingService.loadingOn();
    this.chatService.loadModel(model).subscribe(() => {
      this.loadingService.loadingOff();
    });
  }
}
