"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgentumArmorBase = require("../setC14/ArgentumArmor.js");

class ArgentumArmor extends ArgentumArmorBase {
  constructor(game) {
    super(game, "Argentum Armor", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ArgentumArmor;
