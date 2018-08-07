"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicAwakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Awakening", "Time Spiral", "TSP");
  }
}

module.exports = VolcanicAwakening;
