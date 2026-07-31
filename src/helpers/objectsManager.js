
const objectManager = {
    extraction : function(object) {
        let {nombre, edad} = object;
        console.log(`El nombre es ${nombre} y la edad es ${edad}`);
    },
    extractionRename : function(object) {
        // El rename: toma los valores de las propiedades de object.

        let {nombre: responsable, tarea: tarea} = object;
        // Extrae los valores de name y task que existen en object para usarlos en nuevas variables (nombradas: responsable y tarea).

        console.log(`El responsable es ${responsable} y la tarea es ${tarea}`);
        // Muestra los valores de las propiedades llamadas: responable y tarea.
    }
}

const manipulateObject = {
    read : function(object, key) {
        let value = object[key];
        console.log(`Valores de la propiedad ${key}: ${value}`);
    },
    update : function(object, key, newValue) {
        object[key] = newValue;
        console.log('Object actualizado:', object)
    },
    delete : function(object, key) {
        delete object[key];
        console.log('Object después de eliminar la propiedad:', object); 
    }
}



export {objectManager, manipulateObject};