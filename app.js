var x = 0;
function showWord() {
  // Add code

  var display = wordDeck[x]
  var di = display.split(':')
  document.getElementById('wordLabel').textContent = di

  if(x<9)
  {
      x=x+1
  }
  else
  {
      x=0
  }

}

function changeColor() {
  colors = [
    "blue",
    "pink",
    "green",
    "orange",
    "brown",
    "bisque",
    "red",
    "cyan",
    "yellow",
  ];
}


  const wordDeck = [
    "Bumfuzzle : Being confused, perplexed, or flustered or to cause confusion.",
    "Flawsome : An individual who embraces their flaws and knows they are awesome regardless.",
    "Taradiddle : Someone or something that is filled with pretentious nonsense or something that is a lie.",
    "Fudgel : Pretending to work when you are actually not doing anything.",
    "Unkeyboardinated : When you are unable to type without repeatedly making mistakes.",
    "Rawgabbit : Someone who speaks confidently on a subject of which they know absolutely nothing.",
    "Textpectation : The anticipation felt when waiting for a response to a text.",
    "Smonday : The moment when Sunday stops feeling like a Sunday and the anxiety of Monday kicks in.",
    "Groke : To stare at somebody while they're eating hoping that they'll share.",
    "Earworm : A tune or part of a song that repeats in one's mind.",
  ];

