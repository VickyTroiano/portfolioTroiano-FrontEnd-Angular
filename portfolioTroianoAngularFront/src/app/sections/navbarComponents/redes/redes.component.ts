import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit{
  infoRedes: any=[];
  
  constructor(private datosService:DatosService){}
	
	ngOnInit(): void {
     this.datosService.getDatos().subscribe(datos=> {
          console.log(datos)
          // this.bannerImg = datos.profile.bannerImg;
          this.infoRedes = datos.redes;
          
        });
	    }
}
