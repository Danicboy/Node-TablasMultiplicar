const fs = require('fs');
const colors = require('colors');

// const crearArchivo = ( numero = 5 ) => {
//   console.log("=====================");
//   console.log(`     Tabla del ${ numero }     `);
//   console.log("=====================");

//   let salida = "";

//   for (let i = 1; i <= 10; i++) {
//     const element = i;

//     salida += `${numero} X ${element} = ${numero * element}\n`;
//   }

//   console.log(salida);

//   fs.writeFileSync(`tabla-${numero}.txt`, salida);

//   console.log("Archivo guardado con exito");

//   // fs.writeFile( `tabla-${numero}.txt`, salida, (err) => {
//   //     if( err ) throw err;
//   //     console.log( 'Archivo guardado con exito' );
//   // } )
// }

const crearArchivo = async ( numero , listar = false, hasta = 10) => {
    try {
        if (listar) {
            console.log("=====================".green);
            console.log(`     Tabla del ${numero}     `.green);
            console.log("=====================".green);
        }

        let salida = "";

        for (let i = 1; i <= hasta; i++) {
          const element = i;
          salida += `${numero} ${ 'X' } ${element} = ${numero * element}\n`;
        }

        if ( listar ) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
      
        return "Archivo creado";
    } catch (error) {
        throw error;
    }
 
};

module.exports = {
    crearArchivo
}