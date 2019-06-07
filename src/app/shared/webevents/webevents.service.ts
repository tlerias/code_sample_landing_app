import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import * as WebSocket from 'websocket';
const { w3cwebsocket } = WebSocket;

@Injectable()
export class WebeventsService {
  private url = `${environment.socket.protocol}://${environment.socket.host}:${environment.socket.port}`;
  private socket;

  constructor() { }

  getMessages() {
   let observable = new Observable(observer => {
     this.socket = new w3cwebsocket(this.url);

     this.socket.onerror = () => {
       console.log('Connection Error');
     };

     this.socket.onopen = () => {
       console.log('WebSocket Client Connected');
     };

     this.socket.onclose = () => {
       console.log('echo-protocol Client Closed');
     };

     this.socket.onmessage = (e) => {

       if (typeof e.data === 'string') {
         console.log("Received: '" + e.data + "'");
       }
        observer.next(e);
       };

    });

   return observable;
 }
}
