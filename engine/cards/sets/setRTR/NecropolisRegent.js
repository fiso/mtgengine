"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecropolisRegent extends Card {
  constructor(game) {
    super(game, "Necropolis Regent", "Return to Ravnica", "RTR");
  }
}

module.exports = NecropolisRegent;
