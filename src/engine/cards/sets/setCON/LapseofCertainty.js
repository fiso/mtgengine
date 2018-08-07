"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LapseofCertainty extends UnimplementedCard {
  constructor (game) {
    super(game, "Lapse of Certainty", "Conflux", "CON");
  }
}

module.exports = LapseofCertainty;
