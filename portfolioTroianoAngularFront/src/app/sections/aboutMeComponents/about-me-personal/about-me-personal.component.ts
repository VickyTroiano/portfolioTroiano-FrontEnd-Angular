import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-about-me-personal',
  templateUrl: './about-me-personal.component.html',
  styleUrls: ['./about-me-personal.component.css']
})
export class AboutMePersonalComponent implements OnInit {
  infoPersonal: any=[];

  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos=> {
      this.infoPersonal = datos.personal;
      
      
    });
	}
}
