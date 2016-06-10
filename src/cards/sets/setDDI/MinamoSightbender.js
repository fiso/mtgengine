"use strict";
const Constants = require ("../../../Constants");
const MinamoSightbenderBase = require("../setBOK/MinamoSightbender");

class MinamoSightbender extends MinamoSightbenderBase {
  constructor (game) {
    super(game, "Minamo Sightbender", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = MinamoSightbender;
