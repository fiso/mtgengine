"use strict";
const Constants = require ("../../../Constants");
const DiabolicServitudeBase = require("../setCMA/DiabolicServitude");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor (game) {
    super(game, "Diabolic Servitude", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DiabolicServitude;
