"use strict";
const Constants = require ("../../../Constants");
const HolyArmorBase = require("../setCED/HolyArmor");

class HolyArmor extends HolyArmorBase {
  constructor (game) {
    super(game, "Holy Armor", "Revised Edition", "3ED");
  }
}

module.exports = HolyArmor;
