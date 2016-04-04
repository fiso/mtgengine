"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullRend extends Card {
  constructor(game) {
    super(game, "Skull Rend", "Return to Ravnica", "RTR");
  }
}

module.exports = SkullRend;
