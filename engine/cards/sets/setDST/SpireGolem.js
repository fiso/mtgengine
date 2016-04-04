"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpireGolem extends Card {
  constructor(game) {
    super(game, "Spire Golem", "Darksteel", "DST");
  }
}

module.exports = SpireGolem;
