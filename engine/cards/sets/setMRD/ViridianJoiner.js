"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianJoiner extends Card {
  constructor(game) {
    super(game, "Viridian Joiner", "Mirrodin", "MRD");
  }
}

module.exports = ViridianJoiner;
