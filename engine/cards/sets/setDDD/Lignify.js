"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LignifyBase = require("../setDD3_GVL/Lignify.js");

class Lignify extends LignifyBase {
  constructor(game) {
    super(game, "Lignify", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Lignify;
