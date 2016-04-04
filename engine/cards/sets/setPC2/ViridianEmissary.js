"use strict";
const Constants = require ("../../../Constants");
const ViridianEmissaryBase = require("../setC15/ViridianEmissary");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor(game) {
    super(game, "Viridian Emissary", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ViridianEmissary;
