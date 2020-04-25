const express = require('express')

let balance = 15151
const operations = [
  {
    type: 'credit',
    amount: 15651,
    item: 'monthly income',
    date: 1587842942769,
    place: 'Company Co.'
  },
  {
    type: 'debit',
    amount: 500,
    item: 'groceries',
    date: 1587842952769,
    place: 'Supermarket'
  },
]

const router = express.Router()
router.get('/operations', async (req, res) => {
    res.json(operations)
  }
)
router.get('/balance', async (req, res) => {
    res.json(balance)
  }
)
router.post('/setOperation', async (req, res) => {
    let date = new Date() * 1
    const op = {...req.body, date }
    
    operations.push( op )
    res.sendStatus(200)
  }
)

module.exports = router
