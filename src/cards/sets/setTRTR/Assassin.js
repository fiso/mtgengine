"use strict";
const Constants = require ("../../../Constants");
const AssassinBase = require("../setTCN2/Assassin");

class Assassin extends AssassinBase {
  constructor (game) {
    super(game, "Assassin", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Assassin;
