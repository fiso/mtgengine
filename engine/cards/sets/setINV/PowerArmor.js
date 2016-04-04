"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowerArmorBase = require("../setDDE/PowerArmor.js");

class PowerArmor extends PowerArmorBase {
  constructor(game) {
    super(game, "Power Armor", "Invasion", "INV");
  }
}

module.exports = PowerArmor;
