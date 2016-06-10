"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromaAngelofWrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AkromaAngelofWrath;
