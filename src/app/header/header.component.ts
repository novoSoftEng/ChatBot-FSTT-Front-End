import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { LoadingService } from '../loading.service';
import { MatCommonModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatToolbarModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private loadingService: LoadingService,private chatService : ChatService){}
  selectModel(model: string) {
    this.loadingService.loadingOn();
    this.chatService.loadModel(model).subscribe(() => {
      this.loadingService.loadingOff();
    });
  }


}
