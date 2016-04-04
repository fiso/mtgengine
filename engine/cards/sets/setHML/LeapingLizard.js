"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeapingLizard extends Card {
  constructor(game) {
    super(game, "Leaping Lizard", "Homelands", "HML");
  }
}

module.exports = LeapingLizard;
