"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Slitherhead extends Card {
  constructor(game) {
    super(game, "Slitherhead", "Return to Ravnica", "RTR");
  }
}

module.exports = Slitherhead;
