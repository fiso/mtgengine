"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenArmorer extends Card {
  constructor(game) {
    super(game, "Dwarven Armorer", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenArmorer;
