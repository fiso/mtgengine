"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenArmorer extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Armorer", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenArmorer;
