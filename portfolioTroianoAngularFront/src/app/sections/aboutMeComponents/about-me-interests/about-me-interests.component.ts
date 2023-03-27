import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-about-me-interests',
  templateUrl: './about-me-interests.component.html',
  styleUrls: ['./about-me-interests.component.css']
})
export class AboutMeInterestsComponent implements OnInit {
  infoInterests1: any=[];
  infoInterests2: any=[];
  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos=> {
      this.infoInterests1 = datos.interests1;
      this.infoInterests2 = datos.interests2;
     
      
    });
	}

}
