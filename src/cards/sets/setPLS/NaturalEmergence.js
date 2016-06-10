"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalEmergence extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Emergence", "Planeshift", "PLS");
  }
}

module.exports = NaturalEmergence;
