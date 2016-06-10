"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefensiveManeuvers extends UnimplementedCard {
  constructor (game) {
    super(game, "Defensive Maneuvers", "Onslaught", "ONS");
  }
}

module.exports = DefensiveManeuvers;
