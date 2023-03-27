import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  infoProjects: any=[];
  
  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
     this.datosService.getDatos().subscribe(datos=> {
          console.log(datos)
          // this.bannerImg = datos.profile.bannerImg;
          this.infoProjects = datos.projects;
          
        });
	    }

}
