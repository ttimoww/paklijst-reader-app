const express = require('express');
const fs = require('fs');
const folder = "L:\\tablets\\paklijsten";
const router = express.Router();
router.use(express.json());

router.get('/allLists', (req, resp) => {

    let lists = [];

    fs.readdir(folder, (err, files) => {
        if (err){
            console.log(err)
            resp.status(500)
            resp.json({message: 'Something went wrong'})
        }
        else{
            files.forEach(file => {
                lists.push(file)
              });
              resp.status(200)
              resp.json({list: lists})
        }
      });
})

module.exports = router;