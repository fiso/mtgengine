"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChimeofNight extends Card {
  constructor(game) {
    super(game, "Chime of Night", "Urza's Destiny", "UDS");
  }
}

module.exports = ChimeofNight;
