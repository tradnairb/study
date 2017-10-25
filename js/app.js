// First, define the data
var data = [
  {
    id: 0,
    word: "foretell",
    type: "verb",
    definition: "predict"
  },
  {
    id: 1,
    word: "precipice",
    type: "noun",
    definition: "a very hazardous situation; steep overhanging cliff"
  },
  {
    id: 2,
    word: "destitute",
    type: "adjective",
    definition: "living in complete poverty"
  },
  {
    id: 3,
    word: "fodder",
    type: "noun",
    definition: "coarse food for cattle"
  },
  {
    id: 4,
    word: "furrows",
    type: "noun",
    definition: "a narrow groove in the ground made by a plow"
  },
  {
    id: 5,
    word: "replete",
    type: "adjective",
    definition: "plentifully supplied"
  },
  {
    id: 6,
    word: "debut",
    type: "noun",
    definition: "the first appearance to the public"
  },
  {
    id: 7,
    word: "ginkgo",
    type: "noun",
    definition: "a tree with fan shaped leaves"
  },
  {
    id: 8,
    word: "abundant",
    type: "adjective",
    definition: "plentiful"
  },
  {
    id: 9,
    word: "allusion",
    type: "noun",
    definition: "an indirect reference"
  }
];

for (var i = 0, len = data.length; i < len; i++) {
  addRow(data[i]);
}

function getPraise() {
  var praiseArray = [
    "Great job!",
    "",
    "Keep it up, you can do it!",
    "",
    "Well done!",
    "",
    "You are doing great!",
    ""
  ];
  var message = praiseArray[Math.floor(getRandomArbitrary(0,10))];
  console.log(message);
  responsiveVoice.speak(message, "US English Female");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function addRow(data) {
  var div = document.createElement('div');
  div.id = data.id;
  div.className = 'card';
  div.innerHTML  = '<h1>' + data.word + '</h1>';
  document.getElementById('main').appendChild(div);
}

function sayDefinition(text) {
  responsiveVoice.speak(text, "US English Female");
}

function updateCard(cardID) {
  if(typeof document.getElementById(cardID).getElementsByTagName('p')[0] == "undefined") {
    responsiveVoice.speak(data[cardID].definition, "US English Female",{onend: sayDefinition(data[cardID].word)});
    //responsiveVoice.speak(data[cardID].word, "US English Female");
    //setTimeout(getPraise, 3000);
    document.getElementById(cardID).innerHTML  = '<h1>' + data[cardID].word + ' (' + data[cardID].type + ')</h1>\
                                                  <p>' + data[cardID].definition + '</p>';
  } else {
    document.getElementById(cardID).innerHTML  = '<h1>' + data[cardID].word + '</h1>';
  }
}

function cardClick(e) {
  var targetID = ''
  if(e.target.id != '') {
    targetID = e.target.id;
  } else {
    targetID = e.target.parentElement.id;
  }
  updateCard(targetID);
}

var card = document.querySelectorAll('.card');
for(var i=0;i<card.length;i++){
  card[i].addEventListener('click',cardClick,false);
}
