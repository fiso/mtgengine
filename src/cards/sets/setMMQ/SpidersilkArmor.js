"use strict";
const Constants = require ("../../../Constants");
const SpidersilkArmorBase = require("../setDDG/SpidersilkArmor");

class SpidersilkArmor extends SpidersilkArmorBase {
  constructor(game) {
    super(game, "Spidersilk Armor", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpidersilkArmor;
