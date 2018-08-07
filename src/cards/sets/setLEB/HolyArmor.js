"use strict";
const Constants = require ("../../../Constants");
const HolyArmorBase = require("../set4ED/HolyArmor");

class HolyArmor extends HolyArmorBase {
  constructor (game) {
    super(game, "Holy Armor", "Limited Edition Beta", "LEB");
  }
}

module.exports = HolyArmor;
