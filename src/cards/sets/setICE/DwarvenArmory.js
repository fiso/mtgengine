"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenArmory extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Armory", "Ice Age", "ICE");
  }
}

module.exports = DwarvenArmory;
