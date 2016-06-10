"use strict";
const Constants = require ("../../../Constants");
const SevertheBloodlineBase = require("../setC15/SevertheBloodline");

class SevertheBloodline extends SevertheBloodlineBase {
  constructor (game) {
    super(game, "Sever the Bloodline", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SevertheBloodline;
