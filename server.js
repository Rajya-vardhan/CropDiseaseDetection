const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const CropRoutes=require('./Routes/CropRoutes')
app.use(bodyParser.json());


// Logging middleware
const logReq = (req, res, next) => {
    console.log('[', new Date().toLocaleString(), '] req node to:', '[', req.originalUrl, ']');
    next();
};

app.use(logReq);

app.use('/CropDisease',CropRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is live !!'));