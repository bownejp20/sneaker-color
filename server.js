const express = require('express')
const app = express()
const cors = require('cors') //enables us to get around the cors errors 
const PORT = 2430

app.use(cors())
app.use(express.static('assets'))

const color = {
  'white': {
    'name':  "Air Force 1 '07 'Command Force",
    'size': '8.5',
    'image': 'white.png'
  },
  'green': {
    'name': "Ivy Park x Wmns Super Sleek 3 Strap 'Wonder White Gum'",
    'size': '8',
    'image': 'green.png'
  },
  'red': {
    'name': "NIKE AIR FORCE 1 '07 LV8 SE VARSITY CASUAL SHOES",
    'size': '7',
    'image': 'red.png'
  },
  'yellow': {
    'name': "AIR JORDAN 1 ELEVATE LOW 'CEMENT GREY VARSITY MAIZE'",
    'size': '8',
    'image': 'yellow.png'
  },
  'unknown': {
    'name': 'Sorry, dont have a sneaker that color',
    'size': 'unknown',
    'image': 'unknown'
  }
}


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response) => {
  response.sendFile(__dirname + '/main.js')
})

app.get('/style.css', (request, response) => {
  response.sendFile(__dirname + '/style.css')
})

app.get('/api/:color', (request, response) => {
  const shoeColor = request.params.color.toLowerCase()

  if (color[shoeColor]) {
    response.json(color[shoeColor])
  } else {
    response.json(color['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`PORT: ${PORT}`)
})