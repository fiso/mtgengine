"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonMegaliths extends Card {
  constructor(game) {
    super(game, "Keldon Megaliths", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = KeldonMegaliths;
