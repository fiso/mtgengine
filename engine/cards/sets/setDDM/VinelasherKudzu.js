"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VinelasherKudzu extends Card {
  constructor(game) {
    super(game, "Vinelasher Kudzu", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = VinelasherKudzu;
