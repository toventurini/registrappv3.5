import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { DatabaseService } from "../database.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"],
})
export class CategoryPage implements OnInit {
  //propiedades de asignatura(categoria)
  categoryName: string = "";
  categories: any = [];
  editMode: boolean = false;
  editId: number = 0;

  //Se llama a la base de datos
  constructor(public database: DatabaseService, public platform: Platform) {
    this.database.createDatabase().then(() => {
      this.getCategories();
    });
  }

  ngOnInit() {}

  //ALERTAS DE ALMACENAMIENTO 

  addCategory() {
    if (!this.categoryName.length) {
      alert("Asignatura Creada");
      return;
    }

    if (this.editMode) {
      // editar asignatura(categoria)
      this.database
        .editCategory(this.categoryName, this.editId)
        .then((data) => {
          this.categoryName = "";
          (this.editMode = false), (this.editId = 0);
          alert(data);
          this.getCategories();
        });
    } else {
      // obtener asignatura(categoria)
      this.database.addCategory(this.categoryName).then((data) => {
        this.categoryName = "";
        alert(data);
        this.getCategories();
      });
    }
  }

  //obtener datos asignatura(categoria)
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

  //eliminar datos asignatura(categoria)
  deleteCategory(id: number) {
    this.database.deleteCategory(id).then((data) => {
      alert(data);
      this.getCategories();
    });
  }

  //editar datos asignatura(categoria)
  editCategory(category: any) {
    this.editMode = true;
    this.categoryName = category.name;
    this.editId = category.id;
  }
}
