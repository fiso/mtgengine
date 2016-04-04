"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonMage extends Card {
  constructor(game) {
    super(game, "Dragon Mage", "Commander 2015", "C15");
  }
}

module.exports = DragonMage;
