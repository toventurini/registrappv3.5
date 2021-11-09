import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { strict } from "assert";

@Injectable({
  providedIn: "root",
})

//se crean los ojetos
export class DatabaseService {
  databaseObj: SQLiteObject;
  tables = {
    categories: "categories",
    asistencias: "asistencias",
  };

  constructor(private sqlite: SQLite) {}

  //Se crea la base de datos
  async createDatabase() {
    await this.sqlite
      .create({
        name: "ionic_sqlite_crud",
        location: "default",
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
      })
      .catch((e) => {
        alert("error on creating database " + JSON.stringify(e));
      });

    await this.createTables();
  }

  //TABLA ASIGNATURA(CATEGORY)
  async createTables() {
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS ${this.tables.categories} (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL UNIQUE)`,
      []
    );


    //TABLA ASISTENCIA
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS ${this.tables.asistencias} (id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)`,
      []
    );
  }

  //SE CREAN FUNCIONES DE CADA TABLA 

  //Asignatura(categoria)
  async addCategory(name: string) {
    return this.databaseObj
      .executeSql(
        `INSERT INTO ${this.tables.categories} (name) VALUES ('${name}')`,
        []
      )
      .then(() => {
        return "category created";
      })
      .catch((e) => {
        if (e.code === 6) {
          return "category already exists";
        }

        return "error on creating category " + JSON.stringify(e);
      });
  }

  async getCategories() {
    return this.databaseObj
      .executeSql(
        `SELECT * FROM ${this.tables.categories} ORDER BY name ASC`,
        []
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return "error on getting categories " + JSON.stringify(e);
      });
  }

  async deleteCategory(id: number) {
    return this.databaseObj
      .executeSql(`DELETE FROM ${this.tables.categories} WHERE id = ${id}`, [])
      .then(() => {
        return "category deleted";
      })
      .catch((e) => {
        return "error on deleting category " + JSON.stringify(e);
      });
  }

  async editCategory(name: string, id: number) {
    return this.databaseObj
      .executeSql(
        `UPDATE ${this.tables.categories} SET name = '${name}' WHERE id = ${id}`,
        []
      )
      .then(() => {
        return "category updated";
      })
      .catch((e) => {
        if (e.code === 6) {
          return "category already exist";
        }

        return "error on updating category " + JSON.stringify(e);
      });
  }

  //Asistencia
  async addAsistencia(name: string, category_id: number) {
    return this.databaseObj
      .executeSql(
        `INSERT INTO ${this.tables.asistencias} (name, category_id) VALUES ('${name}', ${category_id})`,
        []
      )
      .then(() => {
        return "Asistencia Creada";
      })
      .catch((e) => {
        return "Error al crear asistencia " + JSON.stringify(e);
      });
  }

  async getAsistencias() {
    return this.databaseObj
      .executeSql(
        `SELECT asistencias.id, asistencias.category_id, asistencias.name as asistencia, categories.name as category FROM asistencias INNER JOIN categories ON categories.id = asistencias.category_id ORDER BY asistencia ASC`,
        []
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return "Error al obtener asistenca " + JSON.stringify(e);
      });
  }

  async deleteAsistencia(id: number) {
    return this.databaseObj
      .executeSql(`DELETE FROM ${this.tables.asistencias} WHERE id = ${id}`, [])
      .then(() => {
        return "Asistencia eliminada";
      })
      .catch((e) => {
        return "Error al eliminar asistencia " + JSON.stringify(e);
      });
  }

  async editAsistencia(name: string, category_id: number, id: number) {
    return this.databaseObj
      .executeSql(
        `UPDATE ${this.tables.asistencias} SET name = '${name}', category_id = ${category_id} WHERE id = ${id}`,
        []
      )
      .then(() => {
        return "Asistencia Actualizada";
      })
      .catch((e) => {
        return "Error al actualizar asistencia" + JSON.stringify(e);
      });
  }

}
