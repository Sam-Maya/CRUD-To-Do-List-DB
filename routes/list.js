const express = require('express')
const router = express.Router()
const ListItem = require('../model/todolist')


router.get('/', async (req,res) =>{
  try{
    const list = await ListItem.find()
    res.json(list)
  }
  catch(err){
    res.send(err)
  }
})

router.get('/:id', async(req,res) =>{
  try{
    const list = await ListItem.findById(req.params.id)
    res.json(list)
  }
  catch(err){
    res.send(err)
  }
})

router.post('/', async(req,res) =>{
  const listItem = new ListItem({
    title : req.body.title,
    completed : req.body.completed
  })
  try{
    const li = await listItem.save()
    res.json(li)
  }
  catch(err){
    res.send(err)
  }
})

router.put('/:id', async(req,res) =>{
  try{
    const listItem = await ListItem.findById(req.params.id)
    listItem.completed = req.body.completed
    const li = await listItem.save()
    res.json(li)
  }
  catch(err){
    res.send(err)
  }
})

router.delete('/:id', async(req,res) =>{
  try{
    const listItem = await ListItem.findById(req.params.id)
    await listItem.remove()
    res.send('item deleted')
  }
  catch(err){
    res.send(err)
  }
})

module.exports = router