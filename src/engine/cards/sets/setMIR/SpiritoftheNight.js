"use strict";
const Constants = require ("../../../Constants");
const SpiritoftheNightBase = require("../setWC98/SpiritoftheNight");

class SpiritoftheNight extends SpiritoftheNightBase {
  constructor (game) {
    super(game, "Spirit of the Night", "Mirage", "MIR");
  }
}

module.exports = SpiritoftheNight;
