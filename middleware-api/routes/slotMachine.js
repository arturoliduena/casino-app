const express = require('express');
const router = express.Router();

const Reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon']
const Reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
const Reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']

const check = elements => result => elements.every(e => result.includes(e))

const cherries_3 = check(['cherry', 'cherry', 'cherry']);
const cherries_2 = check(['cherry', 'cherry']);
const Apples_3 = check(['apple', 'apple', 'apple']);
const Apples_2 = check(['apple', 'apple']);
const Bananas_3 = check(['banana', 'banana', 'banana']);
const Bananas_2 = check(['banana', 'banana']);
const lemons_3 = check(['lemon', 'lemon', 'lemon']);

router.get('/spin', async (req, res) => {
  const row1 = Reel1[Math.floor(Math.random() * 8)]
  const row2 = Reel2[Math.floor(Math.random() * 8)]
  const row3 = Reel3[Math.floor(Math.random() * 8)]
  /*
  ** . 3 cherries in a row: won 50 coins
  ** . 2 cherries in a row: won 40 coins
  ** . 3 Apples in a row: won 20 coins
  ** . 2 Apples in a row: won 10 coins
  ** . 3 Bananas in a row: won 15 coins
  ** . 2 Bananas in a row: won 5 coins
  ** . 3 lemons in a row: won 3 coins
  */
  let result = 0;
  switch (true) {
    case cherries_3([row1, row2, row3]):
      result = 50;
      break;
    case cherries_2([row1, row2, row3]):
      result = 40;
      break;
    case Apples_3([row1, row2, row3]):
      result = 20;
      break;
    case Apples_2([row1, row2, row3]):
      result = 10;
      break;
    case Bananas_3([row1, row2, row3]):
      result = 15;
      break;
    case Bananas_2([row1, row2, row3]):
      result = 5;
      break;
    case lemons_3([row1, row2, row3]):
      result = 3;
      break;
    default:
      break;
  }
  res.json({ row1, row2, row3, result });
});

module.exports = router;
