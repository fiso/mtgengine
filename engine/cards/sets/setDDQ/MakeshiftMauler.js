"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakeshiftMauler extends Card {
  constructor(game) {
    super(game, "Makeshift Mauler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MakeshiftMauler;
