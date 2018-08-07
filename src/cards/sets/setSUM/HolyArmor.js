"use strict";
const Constants = require ("../../../Constants");
const HolyArmorBase = require("../set4ED/HolyArmor");

class HolyArmor extends HolyArmorBase {
  constructor (game) {
    super(game, "Holy Armor", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = HolyArmor;
