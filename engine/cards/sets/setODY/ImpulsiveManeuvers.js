"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpulsiveManeuvers extends UnimplementedCard {
  constructor(game) {
    super(game, "Impulsive Maneuvers", "Odyssey", "ODY");
  }
}

module.exports = ImpulsiveManeuvers;
