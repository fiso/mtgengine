"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecayingSoil extends UnimplementedCard {
  constructor (game) {
    super(game, "Decaying Soil", "Odyssey", "ODY");
  }
}

module.exports = DecayingSoil;
