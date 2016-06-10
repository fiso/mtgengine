"use strict";
const Constants = require ("../../../Constants");
const VodalianKnightsBase = require("../setFEM/VodalianKnights");

class VodalianKnights extends VodalianKnightsBase {
  constructor (game) {
    super(game, "Vodalian Knights", "Masters Edition", "MED");
  }
}

module.exports = VodalianKnights;
