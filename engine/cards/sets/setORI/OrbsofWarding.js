"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrbsofWarding extends Card {
  constructor(game) {
    super(game, "Orbs of Warding", "Magic Origins", "ORI");
  }
}

module.exports = OrbsofWarding;
