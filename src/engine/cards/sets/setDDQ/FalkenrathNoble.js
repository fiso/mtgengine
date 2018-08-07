"use strict";
const Constants = require ("../../../Constants");
const FalkenrathNobleBase = require("../setC17/FalkenrathNoble");

class FalkenrathNoble extends FalkenrathNobleBase {
  constructor (game) {
    super(game, "Falkenrath Noble", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = FalkenrathNoble;
