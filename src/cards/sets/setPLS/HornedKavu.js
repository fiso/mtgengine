"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Horned Kavu", "Planeshift", "PLS");
  }
}

module.exports = HornedKavu;
