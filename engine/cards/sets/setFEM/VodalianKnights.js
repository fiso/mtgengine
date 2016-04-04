"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianKnights extends Card {
  constructor(game) {
    super(game, "Vodalian Knights", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianKnights;
