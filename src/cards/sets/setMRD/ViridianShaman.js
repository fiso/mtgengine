"use strict";
const Constants = require ("../../../Constants");
const ViridianShamanBase = require("../setDDU/ViridianShaman");

class ViridianShaman extends ViridianShamanBase {
  constructor (game) {
    super(game, "Viridian Shaman", "Mirrodin", "MRD");
  }
}

module.exports = ViridianShaman;
