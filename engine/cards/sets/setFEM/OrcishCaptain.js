"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishCaptain extends Card {
  constructor(game) {
    super(game, "Orcish Captain", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishCaptain;
