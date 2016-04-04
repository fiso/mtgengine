"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpireGolemBase = require("../setDST/SpireGolem.js");

class SpireGolem extends SpireGolemBase {
  constructor(game) {
    super(game, "Spire Golem", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = SpireGolem;
