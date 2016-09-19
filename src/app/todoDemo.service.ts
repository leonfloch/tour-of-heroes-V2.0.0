import { Injectable } from '@angular/core';
// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {

    constructor(private http: Http) {
        // el constructor no debe contener lógica extra
        // su función es recibir las dependencias
    }

    leerDatos() {
        let options = this.configurarCabeceras()
        // encadenado de operadores en un observable
        return this.http
            .get("https://jsonplaceholder.typicode.com/todos", options)
            .map(this.obtenerDatos)
            .catch(this.tratarErrores)
    }



    /**
     * función común que debe estar en un servicio compartido
     * puesto que los envíos requieren siempre la misma configuración
     */
    configurarCabeceras() {
        let headers = new Headers({
            'Content-Type': 'application/json'
            //'sessionId': HttpToolsService._credentials
        })
        // llamar a este método en cada llamada, equivale a los interceptores de Angular1
        let options = new RequestOptions({ headers: headers })
        return options
    }


    // para extraer los datos json de la respuesta http 
    obtenerDatos(r) {
        return r.json()
    }


    // tratar errores de comunicación
    tratarErrores(error) {
        console.log(JSON.stringify(error));
        if (error.status == 401) {
            console.log("Error de permisos");
            //HttpToolsService._router.navigate(['seguridad'])
        }
        else {
            console.log("Otro Error");
        }
        return Observable.throw(error._body)
    }

}