"use strict";
const Constants = require ("../../../Constants");
const AssassinBase = require("../setTCN2/Assassin");

class Assassin extends AssassinBase {
  constructor (game) {
    super(game, "Assassin", "Duel Decks: Jace vs. Vraska Tokens", "TDDM");
  }
}

module.exports = Assassin;
