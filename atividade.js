var nome = document.querySelector('#nome')
var nota1 = document.querySelector('#nota1')
var nota2 = document.querySelector('#nota2')
var nota3 = document.querySelector('#nota3')
var nota4 = document.querySelector('#nota4')
var media = document.querySelectorAll('#media')

function resultado() {
  var resultado = document.querySelector('.resultado')
  media =
    (Number(nota1.value) +
      Number(nota2.value) +
      Number(nota3.value) +
      Number(nota4.value)) /
    4

  if (media >= 7) {
    resultado.innerHTML = `${nome.value} sua nota foi de ${media}, Parabéns você foi aprovado(a)!`
  } else {
    resultado.innerHTML = `${nome.value} sua nota foi de ${media}, Infelizemente você foi reprovado(a)!`
  }
  nome.value = ''
  nota1.value = ''
  nota2.value = ''
  nota3.value = ''
  nota4.value = ''
  nome.focus()
}
