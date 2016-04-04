"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DecayingSoil extends Card {
  constructor(game) {
    super(game, "Decaying Soil", "Odyssey", "ODY");
  }
}

module.exports = DecayingSoil;
