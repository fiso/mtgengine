"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Wind", "Masters 25", "A25");
  }
}

module.exports = PlagueWind;
