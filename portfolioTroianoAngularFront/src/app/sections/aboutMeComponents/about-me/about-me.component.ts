import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  textPersonal: any=[];

  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos=> {
      this.textPersonal = datos.about_me;
      
      
    });
	}

}
