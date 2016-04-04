"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmprynTactician extends Card {
  constructor(game) {
    super(game, "Ampryn Tactician", "Magic Origins", "ORI");
  }
}

module.exports = AmprynTactician;
