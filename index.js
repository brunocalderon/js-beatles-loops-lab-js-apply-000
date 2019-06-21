function theBeatlesPlay(musicians, instruments) {
  let musiciansPlay = [];
  let i = 0;
  for (i = 0; i < musicians.length; i++) {
    musiciansPlay.push(musicians[i]+' plays '+instruments[i]);
  }
  return musiciansPlay;
}

const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];

function johnLennonFacts(facts) {
  let theFacts = [];
  let i = 0;
  while (i < facts.length) {
    console.log(facts[i]);
    //theFacts.push(facts[i]+'!!!');
  }
  return theFacts;
}
console.log(johnLennonFacts(facts));