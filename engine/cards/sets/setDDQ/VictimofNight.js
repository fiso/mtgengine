"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictimofNight extends UnimplementedCard {
  constructor(game) {
    super(game, "Victim of Night", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VictimofNight;
