"use strict";
const Constants = require ("../../../Constants");
const LysAlanaHuntmasterBase = require("../setCMA/LysAlanaHuntmaster");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor (game) {
    super(game, "Lys Alana Huntmaster", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = LysAlanaHuntmaster;
