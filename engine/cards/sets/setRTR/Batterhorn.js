"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Batterhorn extends Card {
  constructor(game) {
    super(game, "Batterhorn", "Return to Ravnica", "RTR");
  }
}

module.exports = Batterhorn;
