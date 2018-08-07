"use strict";
const Constants = require ("../../../Constants");
const PowerArmorBase = require("../setDDE/PowerArmor");

class PowerArmor extends PowerArmorBase {
  constructor (game) {
    super(game, "Power Armor", "Invasion", "INV");
  }
}

module.exports = PowerArmor;
