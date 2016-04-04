"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeetleformMage extends Card {
  constructor(game) {
    super(game, "Beetleform Mage", "Dragon's Maze", "DGM");
  }
}

module.exports = BeetleformMage;
