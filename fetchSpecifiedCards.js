var Cards;
fetch("https://raw.githubusercontent.com/futzumi/Greed-Island/main/Cards.json")
  .then(function(response) {
    response.text().then(function(text) {
      Cards = JSON.parse(text);
      for (let i = 0; i < Cards.SpecifiedSlotCards.length; i++) {
        document.body.innerHTML += `<div class='wrapper'> <r>` + Cards.SpecifiedSlotCards[i].split(";")[0] + `</r> <t>` + Cards.SpecifiedSlotCards[i].split(";")[1] + `</t> <m>` + Cards.SpecifiedSlotCards[i].split(";")[2] + `</m>` + "" + `</div>`;   

      }
    });
  });
