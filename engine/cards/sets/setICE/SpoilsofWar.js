"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpoilsofWar extends Card {
  constructor(game) {
    super(game, "Spoils of War", "Ice Age", "ICE");
  }
}

module.exports = SpoilsofWar;
