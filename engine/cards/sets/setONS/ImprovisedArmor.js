"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImprovisedArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Improvised Armor", "Onslaught", "ONS");
  }
}

module.exports = ImprovisedArmor;
