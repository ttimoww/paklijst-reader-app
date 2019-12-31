const express = require('express')
const app = express();


const allLists = require('./routes/allLists')
app.use(allLists);

const getList = require('./routes/getList')
app.use(getList)

app.use(express.static('./public'));
app.listen('8080', () => console.log('Server started on port : 8080'))