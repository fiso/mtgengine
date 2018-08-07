"use strict";
const Constants = require ("../../../Constants");
const ViridianEmissaryBase = require("../setCMA/ViridianEmissary");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor (game) {
    super(game, "Viridian Emissary", "Commander 2015", "C15");
  }
}

module.exports = ViridianEmissary;
