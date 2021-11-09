import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  //propiedades de asignatura(categoria)
  asistenciaName: string = "";
  asistencias: any = [];
  category_id: number = 0;
  categories: any = [];

  //propiedades de asistencia
  editMode: boolean = false;
  selected_category_id: number = 0;
  editId: number = 0;

  //Se llaman datos de:
  constructor(public database: DatabaseService) { 
    this.getCategories();
    this.getAsistencias();
  }

  ngOnInit() {}

  //obtener datos asignatura(categoria) para se leidos por asistencia 
  getCategories() {
    this.database.getCategories().then((data) => {
      this.categories = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.categories.push(data.rows.item(i));
        }
      }
    });
  }

  //añadir asistencia
  addAsistencia() {
    if (!this.asistenciaName.length) {
      alert("Por favor ingrese la fecha");
      return;
    }

    if (this.category_id === 0) {
      alert("Seleccionar categoria");
      return;
    }

    if (this.editMode) {
      this.database
        .editAsistencia(this.asistenciaName, this.category_id, this.editId)
        .then((data) => {
          this.asistenciaName = "";
          this.editMode = false;
          this.editId = 0;
          this.selected_category_id = 0;
          alert(data);
          this.getAsistencias();
        });
    } else {
      // añadir
      this.database
        .addAsistencia(this.asistenciaName, this.category_id)
        .then((data) => {
          this.asistenciaName = "";
          this.category_id = 0;
          alert(data);
          this.getAsistencias();
        });
    }
  }

  //obtener datos asistencia
  getAsistencias() {
    this.database.getAsistencias().then((data) => {
      this.asistencias = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.asistencias.push(data.rows.item(i));
        }
      }
    });
  }

  //eliminar datos asistencia
  deleteAsistencia(id: number) {
    this.database.deleteAsistencia(id).then((data) => {
      alert(data);
      this.getAsistencias();
    });
  }

}
