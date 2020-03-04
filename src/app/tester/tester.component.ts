import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  
  ngOnInit() {
  }
  options={
    audio:false,
    video:false,
    width:500,
    height:500,
    mime:'image/jpeg',
  }
  facingMode:boolean=true
  base64:any=null;
  constructor(){}

  genBase64( webcam:WebCamComponent ){
    webcam.getBase64()
    .then( base=>this.base64=base)
    .catch( e=>console.error(e) )
  }
  change(){
    this.facingMode=!this.facingMode;
  }

  onCamError(err){

    console.log(err)
  }
 
  onCamSuccess(res){
    console.log('camera sucess');
    console.log(res);
  }
}
