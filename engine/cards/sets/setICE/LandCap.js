"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandCap extends Card {
  constructor(game) {
    super(game, "Land Cap", "Ice Age", "ICE");
  }
}

module.exports = LandCap;
