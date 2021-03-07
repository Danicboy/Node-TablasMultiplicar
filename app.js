const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.base );

// console.log(process.argv);

// const [ , , arg3 = 'base=5' ] = process.argv;

// const [ , numero ] = arg3.split( '=' );

// console.log( numero );

// const numero = 7;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log( err ));
