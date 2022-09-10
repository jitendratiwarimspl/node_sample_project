const express = require('express')
const router = express.Router()
// All auther routes
router.get('/',(req,res) => {
   res.render('authors/index');
})

//NewAuther Routes
router.get('/new',(req,res) => {
    res.render('authors/new');
 })

 //create  Routes
router.post('/',(req,res) => {
    res.send('Create');
 })

module.exports = router