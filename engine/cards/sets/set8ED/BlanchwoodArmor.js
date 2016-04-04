"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlanchwoodArmorBase = require("../setDPA/BlanchwoodArmor.js");

class BlanchwoodArmor extends BlanchwoodArmorBase {
  constructor(game) {
    super(game, "Blanchwood Armor", "Eighth Edition", "8ED");
  }
}

module.exports = BlanchwoodArmor;
