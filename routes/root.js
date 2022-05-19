const express = require('express');
const router = express.Router()

//actions from controllers
const {getData, createData, updateData, deleteData} = require('../controllers/root')

router.route('/')
    .get(getData)
    .post(createData)
    .put(updateData)
    .delete(deleteData)

module.exports = router

