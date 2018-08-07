"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonMegaliths extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Megaliths", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = KeldonMegaliths;
