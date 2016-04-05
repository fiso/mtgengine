"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metrognome extends UnimplementedCard {
  constructor(game) {
    super(game, "Metrognome", "Urza's Saga", "USG");
  }
}

module.exports = Metrognome;
