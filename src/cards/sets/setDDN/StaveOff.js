"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaveOff extends UnimplementedCard {
  constructor (game) {
    super(game, "Stave Off", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = StaveOff;
