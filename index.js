function getFirstSelector(elem){
  return document.querySelector(elem)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let elem = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < elem.length; i++) {
      elem[i].innerHTML = parseInt(elem[i].innerHTML) + n
  }
}

function deepestChild(){
  let elem = document.querySelectorAll('#grand-node div')
  return elem[elem.length-1]
}
