"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenArmory extends Card {
  constructor(game) {
    super(game, "Dwarven Armory", "Ice Age", "ICE");
  }
}

module.exports = DwarvenArmory;
