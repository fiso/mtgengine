"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasArmorBase = require("../set8ED/UrzasArmor.js");

class UrzasArmor extends UrzasArmorBase {
  constructor(game) {
    super(game, "Urza's Armor", "Urza's Saga", "USG");
  }
}

module.exports = UrzasArmor;
