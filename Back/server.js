//ipmort du fichier app.js


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/local",{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('connected' , () => {
    console.log('vous etes bien connecté a mongo db')
} )

mongoose.connection.on('error' , (erreure) => {
    console.error(`erreur de connection ${erreure.message}`);
} );

require('./modeles/Posts');
const app = require('./app');

//demarrage du server sur le port 3000
const server = app.listen(3000, () => {
    console.log(`express fonctionne ${server.address().port}`);
})