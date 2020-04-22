import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MuseumService} from '../services/openmuseum.service';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {
  @Input()reference:string;
  @Input()name:string;
  @Input()opening:string;
  @Input()zip:string;
  @Input()city:string;
  @Input()telephone:string;
  @Input()adress:string;
  @Input()website:string;
  @Input()fax:string;
  @Input()closing: string;
  // @Input()reference:any;




  constructor(private museumService: MuseumService, private route: ActivatedRoute) {
   }

  ngOnInit() {
// const reference = this.route.snapshot.params['reference'];
// this.name = this.museumService.getMuseumById('reference').name;
// this.opening = this.museumService.getMuseumById('opening').opening;
// this.zip = this.museumService.getMuseumById('zip').zip;
// this.city = this.museumService.getMuseumById('city').city;
// this.telephone = this.museumService.getMuseumById('telephone').telephone;
// this.adress = this.museumService.getMuseumById('adress').adress;
// this.website = this.museumService.getMuseumById('website').website;
// this.fax = this.museumService.getMuseumById('fax').fax;
// this.closing = this.museumService.getMuseumById('closing').closing;
}
}
