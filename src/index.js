import pic from './images/pic.jpg'
import s from './images/a.svg'
import './styles/main.scss'
import './styles/style.css'
console.log("Hello, Webpack!");



// Create a class property without a constructor
class Game {
    name = 'Violin Charades'
  }
  const myGame = new Game()
  // Create paragraph node
  const p = document.createElement('p')
  p.textContent = `I like ${myGame.name}.`


// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')

const image= document.createElement('img')
image.height=200;
image.src=pic;

const svg= document.createElement('img')
svg.src=s;

app.append(image)
app.append(heading)
app.append(p)

app.append(svg)