"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulFamiliar extends Card {
  constructor(game) {
    super(game, "Foul Familiar", "Deckmasters", "DKM");
  }
}

module.exports = FoulFamiliar;
