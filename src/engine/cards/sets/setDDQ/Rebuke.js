"use strict";
const Constants = require ("../../../Constants");
const RebukeBase = require("../setBBD/Rebuke");

class Rebuke extends RebukeBase {
  constructor (game) {
    super(game, "Rebuke", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Rebuke;
