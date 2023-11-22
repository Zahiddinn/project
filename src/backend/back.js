const express = require('express');
const app = express();

const DATA = [
    {
        img: 'https://i.pinimg.com/564x/de/0b/f2/de0bf2a2dcae9b08abae22f2ad5a2684.jpg',
        title: 'Lizard',
        desc: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
]




app.get('/', (req, res) => {
    res.send(DATA)
  })

  app.listen(9999)