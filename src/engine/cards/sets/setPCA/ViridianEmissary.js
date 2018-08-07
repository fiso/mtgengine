"use strict";
const Constants = require ("../../../Constants");
const ViridianEmissaryBase = require("../setCMA/ViridianEmissary");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor (game) {
    super(game, "Viridian Emissary", "Planechase Anthology", "PCA");
  }
}

module.exports = ViridianEmissary;
