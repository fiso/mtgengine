"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shimmer extends Card {
  constructor(game) {
    super(game, "Shimmer", "Mirage", "MIR");
  }
}

module.exports = Shimmer;
