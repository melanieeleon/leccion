import { HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import{ RecursosService } from './servicios/recursos.service';
import { Plato } from './interface/plato';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './shared/carta/carta.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacionComponent, FooterComponent, MenuComponent, HttpClientModule, CommonModule, CartaComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leccion';
  platos: Plato[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerPlatos().subscribe(respuesta=>{
      this.platos= respuesta as Array<Plato>;
    })
  }
}
