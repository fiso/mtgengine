"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgeArmor extends Card {
  constructor(game) {
    super(game, "Forge Armor", "Mirrodin", "MRD");
  }
}

module.exports = ForgeArmor;
