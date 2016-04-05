"use strict";
const Constants = require ("../../../Constants");
const BlanchwoodArmorBase = require("../setDPA/BlanchwoodArmor");

class BlanchwoodArmor extends BlanchwoodArmorBase {
  constructor(game) {
    super(game, "Blanchwood Armor", "Seventh Edition", "7ED");
  }
}

module.exports = BlanchwoodArmor;
