"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgeArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Forge Armor", "Mirrodin", "MRD");
  }
}

module.exports = ForgeArmor;
