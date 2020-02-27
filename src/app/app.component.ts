import { Component } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webcam-tester';

  options:{
    audio:false,
    video:false,
    width:300,
    height:300,
  }

  base64:any=null;
  constructor(){}

  genBase64( webcam:WebCamComponent ){
    webcam.getBase64()
    .then( base=>this.base64=base)
    .catch( e=>console.error(e) )
  }

  onCamError(err){

    console.log(err)
  }
 
  onCamSuccess(res){
    console.log('camera sucess');
    console.log(res);
  }
}
