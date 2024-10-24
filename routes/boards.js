const router = require('express').Router();
const Boards = require('../models/boards');

router.post('/boards', async (req, res) => {
    try {
        const data = req.body

        const board = await Boards.create({stage: 1, title: data.title })
        res.status = 201;
        return res.send({
          board
        })
        }  catch(error) {
          console.log({error})
          return res.status(500).json({error: "Server error"})
        }
})

router.put('/boards/:id', async (req, res) => {
  try {
    const data = req.body
    const { id:requestId } = req.params;

    if (data.stage != 1 && data.stage != 2 && data.stage != 3){
      return res.status(400).json()
    }

    await Boards.update({stage: data.stage}, {where: {id: requestId}})
    const updatedBoard = await Boards.findByPk(requestId)
    
    res.status = 200;
    return res.send({
      updatedBoard
    })

    }  catch(error) {
      console.log({error})
      return res.status(500).json({error: "Server error"})
    }
  })



module.exports = router;
