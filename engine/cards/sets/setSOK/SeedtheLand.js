"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeedtheLand extends Card {
  constructor(game) {
    super(game, "Seed the Land", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SeedtheLand;
