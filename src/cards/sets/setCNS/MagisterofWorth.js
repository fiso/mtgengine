"use strict";
const Constants = require ("../../../Constants");
const MagisterofWorthBase = require("../setVMA/MagisterofWorth");

class MagisterofWorth extends MagisterofWorthBase {
  constructor (game) {
    super(game, "Magister of Worth", "Conspiracy", "CNS");
  }
}

module.exports = MagisterofWorth;
