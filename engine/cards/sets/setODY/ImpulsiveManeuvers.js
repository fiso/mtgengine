"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpulsiveManeuvers extends Card {
  constructor(game) {
    super(game, "Impulsive Maneuvers", "Odyssey", "ODY");
  }
}

module.exports = ImpulsiveManeuvers;
