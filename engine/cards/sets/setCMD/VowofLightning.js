"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VowofLightning extends Card {
  constructor(game) {
    super(game, "Vow of Lightning", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofLightning;
