"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofDistortion extends Card {
  constructor(game) {
    super(game, "Wall of Distortion", "Mercadian Masques", "MMQ");
  }
}

module.exports = WallofDistortion;
