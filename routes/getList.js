const express = require('express');
const fs = require('fs');
const folder = "L:\\tablets\\paklijsten";
const router = express.Router();

router.use(express.json());

router.get('/getList/:file', (req, resp) => {
    /**
     * Copy file from \\L to the static folder so it can be used in the front-end
     * Source - Destination - Callback
     */
    const {file} = req.params
    const source = folder + '\\' + file;
    const dest = './public/lists/' + file;

    fs.copyFile(source, dest, (err) => {
        if (err){
            console.log(err)
            resp.status(500)
            resp.json({message: 'Something went wrong'})
        }else{
            resp.status(200)
            resp.json({path: `/lists/${file}`})
        }
      });
})

module.exports = router;