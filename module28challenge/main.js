var circle = document.getElementById('circle')
var triangle = document.getElementById('triangle')
var rectangle = document.getElementById('rectangle')
var square = document.getElementById('square')


circle.onclick = function() {
  circle.style.height = '75px'
  circle.style.width = '75px'
  circle.style.borderRadius = '50px'

}


square.onclick = function(){
    square.style.height = '80px'
    square.style.width = '90px'
}

rectangle.onclick = function(){
    rectangle.style.height = '70px'
    rectangle.style.width = '120px'
}

triangle.onclick = function(){
    triangle.style.height = '70px'
    triangle.style.width = '80px'
    triangle.style.borderBottomLeftRadius
}