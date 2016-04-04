"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefensiveManeuvers extends Card {
  constructor(game) {
    super(game, "Defensive Maneuvers", "Onslaught", "ONS");
  }
}

module.exports = DefensiveManeuvers;
