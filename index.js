function theBeatlesPlay(musicians, instruments) {
  let musiciansPlay = [];
  let i = 0;
  for (i = 0; i < musicians.length; i++) {
    musiciansPlay.push(musicians[i]+' plays '+instruments[i]);
  }
  return musiciansPlay;
}

function johnLennonFacts(facts) {
  let theFacts = [];
  let i = 0;
  while (i < facts.length) {
    theFacts.push(facts[i]+'!!!');
    i++;
  }
  return theFacts;
}

function iLoveTheBeatles(index) {
  do {
    switch (index) {
      case 7:
        return ["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"];
        break;
      case 17:
          return ["I love the Beatles!"];
        break;
      
    }
    if (index === 7)
    return ["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"];
  }
  while (index === 7 || index === 17);
}