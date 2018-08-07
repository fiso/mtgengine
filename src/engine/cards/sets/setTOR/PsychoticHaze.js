"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychoticHaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychotic Haze", "Torment", "TOR");
  }
}

module.exports = PsychoticHaze;
