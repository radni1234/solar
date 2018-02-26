import {Component, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('childModal') childModal: ModalDirective;
  private pov: string;
  private snaga: string;
  private prinos: string;


  krovovi = [
    {
      id: 1,
      pov: 50,
      snaga: 12.5,
      prinos: 1245,
      path: [
        {lat: 45.568754230265135, lng: 19.63583763492852},
        {lat: 45.56871479880091, lng: 19.635789355166253},
        {lat: 45.56866973423649, lng: 19.63585909260064},
        {lat: 45.568718554179675, lng: 19.635907372362908}
      ]
    },
    {
      id: 2,
      pov: 24,
      snaga: 4.5,
      prinos: 345,
      path: [
        {lat: 45.568925099623634, lng: 19.635566731818017},
        {lat: 45.568870646807596, lng: 19.635553320772942},
        {lat: 45.56883497079606, lng: 19.63560696495324},
        {lat: 45.56888566827938, lng: 19.635641833670434}
      ]
    },
    {
      id: 3,
      pov: 24,
      snaga: 4.5,
      prinos: 345,
      path: [
        {lat: 45.568859380701156, lng: 19.636438449747857},
        {lat: 45.56917107547982, lng: 19.636805912382897},
        {lat: 45.569201118258654, lng: 19.636779090292748},
        {lat: 45.56936447558742, lng: 19.6369507516697},
        {lat: 45.56939827359609, lng: 19.636902471907433},
        {lat: 45.56946023655919, lng: 19.636969527132806},
        {lat: 45.56949027918358, lng: 19.636881014235314},
        {lat: 45.56930251251891, lng: 19.636701306231316},
        {lat: 45.56937198625799, lng: 19.636569877989587},
        {lat: 45.56947338020948, lng: 19.636658390887078},
        {lat: 45.56950905581571, lng: 19.636537691481408},
        {lat: 45.569257448426185, lng: 19.636250695116814},
        {lat: 45.56930626785855, lng: 19.636167546637353},
        {lat: 45.56934569890755, lng: 19.63619973314553},
        {lat: 45.56943958224614, lng: 19.636046847231682},
        {lat: 45.56922740567747, lng: 19.635818859465417},
        {lat: 45.569141032685465, lng: 19.63597442758828},
        {lat: 45.56918609687181, lng: 19.636033436186608}
      ]
    }
  ];


  clicked(event){
    this.showChildModal();
    console.log(event);
    this.pov = event.pov;
    this.snaga = event.snaga;
    this.prinos = event.prinos;

  }
  // clicked({target: marker}) {
  //   // this.marker.lat = marker.getPosition().lat();
  //   // this.marker.lng = marker.getPosition().lng();
  //
  //   marker.nguiMapComponent.openInfoWindow('iw', marker);
  // }
  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
