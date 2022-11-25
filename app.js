const sliderElement = document.querySelector('#slider')
const button = document.querySelector('#btn')
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!'

let sizePassword = document.querySelector('#value')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let newPassword = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value
}

button.addEventListener('click', () => {
  let pass = ''
  for(let i=0, n=charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  password.innerHTML = pass
  newPassword = pass
})

password.addEventListener('click', () => {
  navigator.clipboard.writeText(newPassword)
  alert('Senha copiada com sucesso!')
})
