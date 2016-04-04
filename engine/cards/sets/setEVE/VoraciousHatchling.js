"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoraciousHatchling extends Card {
  constructor(game) {
    super(game, "Voracious Hatchling", "Eventide", "EVE");
  }
}

module.exports = VoraciousHatchling;
