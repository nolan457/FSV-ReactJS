import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import CardList from '@/components/CardList.jsx'
import Card from '@/components/Card.jsx'
import { objectManager, manipulateObject } from '@/helpers/objectsManager'


let persona = {
  nombre: "Laura",
  edad: 40,
  tarea: "Developer",
};


// --- OBJETO ---
objectManager.extraction(persona);
objectManager.extractionRename(persona);

// ---MANIPULACION DE OBJETO ---
manipulateObject.read(persona, "nombre");
manipulateObject.update(persona, "edad", 41);
manipulateObject.update(persona, "trabajo", "Junior Developer");
manipulateObject.delete(persona, "tarea");


/* COMBINACION DE OBJETOS */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList List={[
        { nombre: "Juan", edad: 30 },
        { nombre: "Daniel", edad: 27 },
        { nombre: "Marcos", edad: 20 },
    ]} />
    
    <Card primaryParam="Cargo" primaryParamValue="Develop" secondaryParam="Años de experiencia" secondaryParamValue={22} />
  </StrictMode>,
);
