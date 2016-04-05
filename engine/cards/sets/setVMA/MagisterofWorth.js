"use strict";
const Constants = require ("../../../Constants");
const MagisterofWorthBase = require("../setCNS/MagisterofWorth");

class MagisterofWorth extends MagisterofWorthBase {
  constructor(game) {
    super(game, "Magister of Worth", "Vintage Masters", "VMA");
  }
}

module.exports = MagisterofWorth;
