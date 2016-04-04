"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosMoon extends Card {
  constructor(game) {
    super(game, "Chaos Moon", "Ice Age", "ICE");
  }
}

module.exports = ChaosMoon;
