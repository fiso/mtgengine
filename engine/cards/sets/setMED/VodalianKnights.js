"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VodalianKnightsBase = require("../setFEM/VodalianKnights.js");

class VodalianKnights extends VodalianKnightsBase {
  constructor(game) {
    super(game, "Vodalian Knights", "Masters Edition", "MED");
  }
}

module.exports = VodalianKnights;
