"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LysAlanaHuntmasterBase = require("../setC14/LysAlanaHuntmaster.js");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor(game) {
    super(game, "Lys Alana Huntmaster", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = LysAlanaHuntmaster;
