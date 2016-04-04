"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViridianEmissaryBase = require("../setC15/ViridianEmissary.js");

class ViridianEmissary extends ViridianEmissaryBase {
  constructor(game) {
    super(game, "Viridian Emissary", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianEmissary;
