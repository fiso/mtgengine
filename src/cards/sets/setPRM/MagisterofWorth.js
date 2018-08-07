"use strict";
const Constants = require ("../../../Constants");
const MagisterofWorthBase = require("../setVMA/MagisterofWorth");

class MagisterofWorth extends MagisterofWorthBase {
  constructor (game) {
    super(game, "Magister of Worth", "Magic Online Promos", "PRM");
  }
}

module.exports = MagisterofWorth;
