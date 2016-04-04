"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcumsSleigh extends Card {
  constructor(game) {
    super(game, "Arcum's Sleigh", "Ice Age", "ICE");
  }
}

module.exports = ArcumsSleigh;
