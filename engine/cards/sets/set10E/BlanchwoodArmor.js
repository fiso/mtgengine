"use strict";
const Constants = require ("../../../Constants");
const BlanchwoodArmorBase = require("../setDPA/BlanchwoodArmor");

class BlanchwoodArmor extends BlanchwoodArmorBase {
  constructor(game) {
    super(game, "Blanchwood Armor", "Tenth Edition", "10E");
  }
}

module.exports = BlanchwoodArmor;
