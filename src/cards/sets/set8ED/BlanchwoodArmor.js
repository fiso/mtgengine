"use strict";
const Constants = require ("../../../Constants");
const BlanchwoodArmorBase = require("../setM19/BlanchwoodArmor");

class BlanchwoodArmor extends BlanchwoodArmorBase {
  constructor (game) {
    super(game, "Blanchwood Armor", "Eighth Edition", "8ED");
  }
}

module.exports = BlanchwoodArmor;
