import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/Geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage {
  lati:number;
  long:number;

  constructor(public geolocation: Geolocation, public platform:Platform) {
    this.platform.ready().then(()=>{
      this.GetUbicacion();
    })
   }

   GetUbicacion()
   {
     this.geolocation.getCurrentPosition().then((position)=>{
       this.lati= position.coords.latitude;
       this.long = position.coords.longitude;
       
     })
 
   }

}
