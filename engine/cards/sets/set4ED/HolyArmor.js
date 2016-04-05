"use strict";
const Constants = require ("../../../Constants");
const HolyArmorBase = require("../setCED/HolyArmor");

class HolyArmor extends HolyArmorBase {
  constructor(game) {
    super(game, "Holy Armor", "Fourth Edition", "4ED");
  }
}

module.exports = HolyArmor;
