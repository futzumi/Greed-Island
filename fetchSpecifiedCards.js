var Cards;
fetch("https://raw.githubusercontent.com/futzumi/Greed-Island/main/Cards.json")
  .then(function(response) { 
    response.text().then(function(text) {
      Cards = JSON.parse(text);
      for (let i = 0; i < Cards.SpecifiedSlotCards.length; i++) {
  document.body.innerHTML += Cards.SpecifiedSlotCards[i].split(";")[0] + "  " + Cards.SpecifiedSlotCards[i].split(";")[1] + "  " + Cards.SpecifiedSlotCards[i].split(";")[2] + "<br>"
}
    });
  });
