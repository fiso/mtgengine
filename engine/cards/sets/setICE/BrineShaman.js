"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrineShaman extends Card {
  constructor(game) {
    super(game, "Brine Shaman", "Ice Age", "ICE");
  }
}

module.exports = BrineShaman;
