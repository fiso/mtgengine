"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostburnWeird extends Card {
  constructor(game) {
    super(game, "Frostburn Weird", "Return to Ravnica", "RTR");
  }
}

module.exports = FrostburnWeird;
