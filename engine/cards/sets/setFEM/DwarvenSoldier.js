"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenSoldier extends Card {
  constructor(game) {
    super(game, "Dwarven Soldier", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenSoldier;
