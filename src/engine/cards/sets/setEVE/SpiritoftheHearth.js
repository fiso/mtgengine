"use strict";
const Constants = require ("../../../Constants");
const SpiritoftheHearthBase = require("../setC17/SpiritoftheHearth");

class SpiritoftheHearth extends SpiritoftheHearthBase {
  constructor (game) {
    super(game, "Spirit of the Hearth", "Eventide", "EVE");
  }
}

module.exports = SpiritoftheHearth;
