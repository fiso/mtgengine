"use strict";
const Constants = require ("../../../Constants");
const GustSkimmerBase = require("../setMM2/GustSkimmer");

class GustSkimmer extends GustSkimmerBase {
  constructor (game) {
    super(game, "Gust-Skimmer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GustSkimmer;
