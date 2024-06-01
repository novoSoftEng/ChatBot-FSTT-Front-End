import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8500/query'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<Message> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { prompt: message };

    return this.http.post<{ response: string }>(this.apiUrl, body, { headers })
      .pipe(
        map(response => {
          return {
            user: 'Bot',
            text: response.response
          };
        })
      );
  }
}
