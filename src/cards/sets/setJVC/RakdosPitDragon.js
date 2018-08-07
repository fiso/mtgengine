"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosPitDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Pit Dragon", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = RakdosPitDragon;
