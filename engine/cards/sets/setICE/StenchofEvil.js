"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StenchofEvil extends Card {
  constructor(game) {
    super(game, "Stench of Evil", "Ice Age", "ICE");
  }
}

module.exports = StenchofEvil;
