"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralLightning extends Card {
  constructor(game) {
    super(game, "Feral Lightning", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FeralLightning;
