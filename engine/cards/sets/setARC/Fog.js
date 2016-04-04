"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fog extends Card {
  constructor(game) {
    super(game, "Fog", "Archenemy", "ARC");
  }
}

module.exports = Fog;
