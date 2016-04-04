"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreatWall extends Card {
  constructor(game) {
    super(game, "Great Wall", "Legends", "LEG");
  }
}

module.exports = GreatWall;
