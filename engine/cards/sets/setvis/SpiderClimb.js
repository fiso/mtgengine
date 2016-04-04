"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiderClimb extends Card {
  constructor(game) {
    super(game, "Spider Climb", "Visions", "VIS");
  }
}

module.exports = SpiderClimb;
