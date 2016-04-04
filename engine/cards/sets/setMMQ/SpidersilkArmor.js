"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpidersilkArmorBase = require("../setDDG/SpidersilkArmor.js");

class SpidersilkArmor extends SpidersilkArmorBase {
  constructor(game) {
    super(game, "Spidersilk Armor", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpidersilkArmor;
