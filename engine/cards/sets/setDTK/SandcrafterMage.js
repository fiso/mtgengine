"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandcrafterMage extends Card {
  constructor(game) {
    super(game, "Sandcrafter Mage", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SandcrafterMage;
