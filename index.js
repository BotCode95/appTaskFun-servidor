const express = require('express');

const app = express();

//habilitar express.json
app.use(express.json({ extended : true}));

const PORT = process.env.PORT || 4000;

//init app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})