"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DramaticRescue extends Card {
  constructor(game) {
    super(game, "Dramatic Rescue", "Return to Ravnica", "RTR");
  }
}

module.exports = DramaticRescue;
