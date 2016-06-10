"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoreOverthePages extends UnimplementedCard {
  constructor (game) {
    super(game, "Pore Over the Pages", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = PoreOverthePages;
