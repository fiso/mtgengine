"use strict";
const Constants = require ("../../../Constants");
const AngelofGlorysRiseBase = require("../setAVR/AngelofGlorysRise");

class AngelofGlorysRise extends AngelofGlorysRiseBase {
  constructor (game) {
    super(game, "Angel of Glory's Rise", "Resale Promos", "PRES");
  }
}

module.exports = AngelofGlorysRise;
