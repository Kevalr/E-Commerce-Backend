const express = require('express');
const PORT = 8000;

const app = express();

app.use('/', require('./routes'));



app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error While Starting The Server - ${err}`);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
})