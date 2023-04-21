const colorInput = document.querySelector('#shoeColor')
const button = document.querySelector('button')

button.addEventListener('click', getShoeColor)

function getShoeColor() {
  const colorInput = document.querySelector('#shoeColor').value
  fetch(`/api/${colorInput}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector("#name").innerText = data.name
      document.querySelector("#size").innerText = data.size
      if(data.image !== 'unknown'){
      document.querySelector("img").src = data.image
      }else{
        document.querySelector("img").src = ''
      }
    })
}