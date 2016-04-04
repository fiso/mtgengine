"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollingThunder extends Card {
  constructor(game) {
    super(game, "Rolling Thunder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RollingThunder;
