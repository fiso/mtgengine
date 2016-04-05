"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathNoble extends UnimplementedCard {
  constructor(game) {
    super(game, "Falkenrath Noble", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = FalkenrathNoble;
