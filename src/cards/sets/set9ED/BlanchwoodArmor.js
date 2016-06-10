"use strict";
const Constants = require ("../../../Constants");
const BlanchwoodArmorBase = require("../setDPA/BlanchwoodArmor");

class BlanchwoodArmor extends BlanchwoodArmorBase {
  constructor (game) {
    super(game, "Blanchwood Armor", "Ninth Edition", "9ED");
  }
}

module.exports = BlanchwoodArmor;
