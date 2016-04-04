"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroicDefiance extends Card {
  constructor(game) {
    super(game, "Heroic Defiance", "Planeshift", "PLS");
  }
}

module.exports = HeroicDefiance;
