"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofEarth extends Card {
  constructor(game) {
    super(game, "Wall of Earth", "Legends", "LEG");
  }
}

module.exports = WallofEarth;
