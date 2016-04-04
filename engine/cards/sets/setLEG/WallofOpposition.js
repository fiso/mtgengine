"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofOppositionBase = require("../setCHR/WallofOpposition.js");

class WallofOpposition extends WallofOppositionBase {
  constructor(game) {
    super(game, "Wall of Opposition", "Legends", "LEG");
  }
}

module.exports = WallofOpposition;
