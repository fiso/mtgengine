"use strict";
const Constants = require ("../../../Constants");
const SlithFirewalkerBase = require("../setJVC/SlithFirewalker");

class SlithFirewalker extends SlithFirewalkerBase {
  constructor (game) {
    super(game, "Slith Firewalker", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SlithFirewalker;
