"use strict";
const Constants = require ("../../../Constants");
const ViridianEmissaryBase = require("../setCMA/ViridianEmissary");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor (game) {
    super(game, "Viridian Emissary", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianEmissary;
