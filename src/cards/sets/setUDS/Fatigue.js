"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fatigue extends UnimplementedCard {
  constructor(game) {
    super(game, "Fatigue", "Urza's Destiny", "UDS");
  }
}

module.exports = Fatigue;
