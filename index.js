const express = require('express');

const app = express();

// const PORT = localhost:4000;

app.listen(PORT, (req,res) => {
    console.log(`Esta escuchando en el port ${PORT}`);
})