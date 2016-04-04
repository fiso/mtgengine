"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesKiss extends Card {
  constructor(game) {
    super(game, "Nature's Kiss", "Weatherlight", "WTH");
  }
}

module.exports = NaturesKiss;
