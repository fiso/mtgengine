"use strict";
const Constants = require ("../../../Constants");
const ViridianShamanBase = require("../setDDU/ViridianShaman");

class ViridianShaman extends ViridianShamanBase {
  constructor (game) {
    super(game, "Viridian Shaman", "Commander 2015", "C15");
  }
}

module.exports = ViridianShaman;
