"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setC14/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DreadReturn;
