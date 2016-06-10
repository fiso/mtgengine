"use strict";
const Constants = require ("../../../Constants");
const ViridianShamanBase = require("../setC15/ViridianShaman");

class ViridianShaman extends ViridianShamanBase {
  constructor (game) {
    super(game, "Viridian Shaman", "Tenth Edition", "10E");
  }
}

module.exports = ViridianShaman;
