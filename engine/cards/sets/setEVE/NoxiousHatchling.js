"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoxiousHatchling extends Card {
  constructor(game) {
    super(game, "Noxious Hatchling", "Eventide", "EVE");
  }
}

module.exports = NoxiousHatchling;
