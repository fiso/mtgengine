"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZelyonSword extends UnimplementedCard {
  constructor(game) {
    super(game, "Zelyon Sword", "Fallen Empires", "FEM");
  }
}

module.exports = ZelyonSword;
