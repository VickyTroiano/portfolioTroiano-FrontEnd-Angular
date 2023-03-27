import{Component, OnInit} from '@angular/core';
//importo el servicio de datos -1
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.css']
})
export class BannerContentComponent implements OnInit {
      //primer manera para usar pipes - forma hardcoding
      //name = 'Victoria ';

      //creo variable de instancia para almacenar los datos que me traigo del servicio -2
      infoBanner:any;

      //inicializar variables de instancia para ser usadas en ngOnInit()
      name: string='';
      bannerImg: any='';

      //Inyecto el servicio para poder tener acceso a los metodos -3 (alias en minuscula)
      constructor(private datosService:DatosService){}

      //almaceno  en la variable de instancia los datos recuperados del servicio
	    ngOnInit(): void {

        //este servicio, dame los datos... me suscribo porque son datos observables. Data se puede llamar dato o como queramos
        //..y cuando datos, entonces, haces la funcion
        //funcion de flecha (=>) es entonces.
        this.datosService.getDatos().subscribe(datos=> {
          console.log(datos)
          this.name = datos.profile.name;
          this.bannerImg = datos.profile.bannerImg;
        });
	    }
}
