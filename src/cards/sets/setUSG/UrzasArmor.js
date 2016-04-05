"use strict";
const Constants = require ("../../../Constants");
const UrzasArmorBase = require("../set8ED/UrzasArmor");

class UrzasArmor extends UrzasArmorBase {
  constructor(game) {
    super(game, "Urza's Armor", "Urza's Saga", "USG");
  }
}

module.exports = UrzasArmor;
