"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiabolicServitudeBase = require("../setC15/DiabolicServitude.js");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor(game) {
    super(game, "Diabolic Servitude", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DiabolicServitude;
