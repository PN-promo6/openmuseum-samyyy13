import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import {MuseumService} from '../services/openmuseum.service'


@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumTitle:string="Title from detail"
reference:string;
name:string;
opening:string;
zip:string;
city:string;
telephone:string;
adress:string;
website:string;
fax:string;
closing:string;

  constructor(private museumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const refMuseum = this.route.snapshot.params['reference'];
    this.name = this.museumService.getMuseumById(refMuseum).name;
    this.opening = this.museumService.getMuseumById(refMuseum).opening;
    this.zip = this.museumService.getMuseumById(refMuseum).zip;
    this.city = this.museumService.getMuseumById(refMuseum).city;
    this.telephone = this.museumService.getMuseumById(refMuseum).telephone;
    this.adress = this.museumService.getMuseumById(refMuseum).adress;
    this.website = this.museumService.getMuseumById(refMuseum).website;
    this.fax = this.museumService.getMuseumById(refMuseum).fax;
    this.closing = this.museumService.getMuseumById(refMuseum).closing;
  }

}
