"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Soldier", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenSoldier;
