"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvalancheRiders extends UnimplementedCard {
  constructor(game) {
    super(game, "Avalanche Riders", "Friday Night Magic", "pFNM");
  }
}

module.exports = AvalancheRiders;
