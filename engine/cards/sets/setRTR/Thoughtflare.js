"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thoughtflare extends Card {
  constructor(game) {
    super(game, "Thoughtflare", "Return to Ravnica", "RTR");
  }
}

module.exports = Thoughtflare;
