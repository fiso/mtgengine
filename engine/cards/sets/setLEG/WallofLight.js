"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofLight extends Card {
  constructor(game) {
    super(game, "Wall of Light", "Legends", "LEG");
  }
}

module.exports = WallofLight;
