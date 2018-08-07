"use strict";
const Constants = require ("../../../Constants");
const VodalianKnightsBase = require("../setMED/VodalianKnights");

class VodalianKnights extends VodalianKnightsBase {
  constructor (game) {
    super(game, "Vodalian Knights", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianKnights;
