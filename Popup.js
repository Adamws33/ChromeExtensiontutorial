function click(e){
  chrome.tabs.executeScript(null,
  {code:"document.body.style.backgroundImage='url("+ images[e.target.id]
  +"'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function(){
  var divs = document.querySelectorAll('div');
  for (var i = 0; i<divs.length; i++){
    divs[i].addEventListener('click', click)
  }
});

var images = {
  joe: 'https://i.imgur.com/xHf4DMy.png',
  kate:'https://i.imgur.com/vRcjDUr.jpg',
  david:'https://i.imgur.com/ymLU45k.png',
  nimit:'https://i.imgur.com/tlFG4QO.png',
  chris:'https://i.imgur.com/ubwQUXO.jpg'
};