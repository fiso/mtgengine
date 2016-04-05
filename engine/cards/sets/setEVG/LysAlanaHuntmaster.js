"use strict";
const Constants = require ("../../../Constants");
const LysAlanaHuntmasterBase = require("../setC14/LysAlanaHuntmaster");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor(game) {
    super(game, "Lys Alana Huntmaster", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = LysAlanaHuntmaster;
