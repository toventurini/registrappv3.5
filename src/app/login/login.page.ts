import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// Toast Controller 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:'',
    password:''
  };

  // Variable para mostrar el campo fatante
  campo : string
  constructor(private router: Router,public toastController: ToastController) { } // Se debe instanciar

  ngOnInit(){
  }
  ingresar(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    if( this.user.usuario==='admin' && this.user.password==='pass21')
       this.router.navigate(['/category'],navigationExtras); // navegamos hacia generarqr y enviamos información adicional
    else if( this.user.usuario==='profesor' && this.user.password==='pass21')
       this.router.navigate(['/generarqr'],navigationExtras); // navegamos hacia escanear y enviamos información adicional
    else if( this.user.usuario==='estudiante' && this.user.password==='pass21')
       this.router.navigate(['/asistencia'],navigationExtras); // navegamos hacia escanear y enviamos información adicional
    else{
      this.presentToast('Usuario o password no validos');
    }
  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */ 
    async presentToast(message : string, duration?:number){
      const toast = await this.toastController.create(
        {
          message:message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }

    validateModel (model:any){
      // recorro todas la entradas que me entrega el objeto entrada
      for (var [Key,value] of Object.entries(model)) {

      }
    }
  
  }

