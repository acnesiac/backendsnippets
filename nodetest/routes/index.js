const express = require('express');
const router =  express.Router();
const service =  require('../service/users');

router.get('/',(req,res)=>{
service();
});

module.exports = router;




