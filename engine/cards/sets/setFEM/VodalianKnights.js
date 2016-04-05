"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianKnights extends UnimplementedCard {
  constructor(game) {
    super(game, "Vodalian Knights", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianKnights;
