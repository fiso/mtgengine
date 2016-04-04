"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalInfluence extends Card {
  constructor(game) {
    super(game, "Tidal Influence", "Fallen Empires", "FEM");
  }
}

module.exports = TidalInfluence;
