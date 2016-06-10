"use strict";
const Constants = require ("../../../Constants");
const DiabolicServitudeBase = require("../setC15/DiabolicServitude");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor (game) {
    super(game, "Diabolic Servitude", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DiabolicServitude;
