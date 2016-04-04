"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoreOverthePages extends Card {
  constructor(game) {
    super(game, "Pore Over the Pages", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = PoreOverthePages;
