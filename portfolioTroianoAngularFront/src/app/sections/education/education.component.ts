import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  formalEducation: any=[];
  informalEducation: any=[];
 
  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
     this.datosService.getDatos().subscribe(datos=> {
          console.log(datos)
          // this.bannerImg = datos.profile.bannerImg;
          this.formalEducation = datos.education_formal;
          this.informalEducation = datos.education_informal;
        });
	    }
	}

