"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroundlingPouncer extends Card {
  constructor(game) {
    super(game, "Groundling Pouncer", "Eventide", "EVE");
  }
}

module.exports = GroundlingPouncer;
