import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    //creo variable de instancia para almacenar los datos que me traigo del servicio -2
    infoSkillFront: any=[];
    infoSkillBack: any=[];
    infoSkillLang: any=[];
    infoSkillDesign: any=[];

    //inicializar variables de instancia para ser usadas en ngOnInit()
    // skillId: number=0;
    // skillName: string='';
    // skillPercentage: any='';

    //Inyecto el servicio para poder tener acceso a los metodos -3 (alias en minuscula)
    constructor(private datosService:DatosService){}

     //almaceno  en la variable de instancia los datos recuperados del servicio
    ngOnInit(): void {

      this.datosService.getDatos().subscribe(datos=> {
        this.infoSkillFront = datos.skills_front;
        this.infoSkillBack = datos.skills_back;
        this.infoSkillLang = datos.skills_idiomas;
        this.infoSkillDesign = datos.skills_design;
        
      });
    }

}
