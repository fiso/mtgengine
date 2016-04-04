"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Snowfall extends Card {
  constructor(game) {
    super(game, "Snowfall", "Ice Age", "ICE");
  }
}

module.exports = Snowfall;
