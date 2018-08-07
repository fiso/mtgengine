"use strict";
const Constants = require ("../../../Constants");
const ViridianShamanBase = require("../setDDU/ViridianShaman");

class ViridianShaman extends ViridianShamanBase {
  constructor (game) {
    super(game, "Viridian Shaman", "Ninth Edition", "9ED");
  }
}

module.exports = ViridianShaman;
