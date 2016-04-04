"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkymarkRoc extends Card {
  constructor(game) {
    super(game, "Skymark Roc", "Return to Ravnica", "RTR");
  }
}

module.exports = SkymarkRoc;
