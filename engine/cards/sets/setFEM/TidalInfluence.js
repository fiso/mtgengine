"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalInfluence extends UnimplementedCard {
  constructor(game) {
    super(game, "Tidal Influence", "Fallen Empires", "FEM");
  }
}

module.exports = TidalInfluence;
