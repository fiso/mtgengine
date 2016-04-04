"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HolyArmorBase = require("../setCED/HolyArmor.js");

class HolyArmor extends HolyArmorBase {
  constructor(game) {
    super(game, "Holy Armor", "Limited Edition Beta", "LEB");
  }
}

module.exports = HolyArmor;
