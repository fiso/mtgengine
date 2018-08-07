"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Incinerate extends UnimplementedCard {
  constructor (game) {
    super(game, "Incinerate", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Incinerate;
