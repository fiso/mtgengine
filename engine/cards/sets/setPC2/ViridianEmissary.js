"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViridianEmissaryBase = require("../setC15/ViridianEmissary.js");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor(game) {
    super(game, "Viridian Emissary", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ViridianEmissary;
