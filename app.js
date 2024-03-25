const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/utma'

mongoose.connect(url_db)
.then(() =>{
    console.log('conexion exitosa')
})
.catch((err) =>{
    console.log('no funciono tu pndejada')
})

const esquema_alumnos = new mongoose.Schema(
    {
        name: {
            type: String
        },
        apepat: {
            type: String
        },
        apemat: {
            type: String
        },
        telnumber: {
            type: Number
        },
        fecnac: {
            type: Date
        },
    }
)

const alumnos = new mongoose.model('tabla de registro de alumnos', esquema_alumnos)

alumnos.create(
    {
        name: 'Alvaro',
        apepat: 'Esparza',
        apemat: 'Lopez',
        telnumber: 4495143213,
        fecnac: new Date ('2004, 03, 19'),
    }
)