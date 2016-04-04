"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperLeafAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Copper-Leaf Angel", "Prophecy", "PCY");
  }
}

module.exports = CopperLeafAngel;
