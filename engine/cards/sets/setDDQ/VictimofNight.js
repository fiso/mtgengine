"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VictimofNight extends Card {
  constructor(game) {
    super(game, "Victim of Night", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VictimofNight;
