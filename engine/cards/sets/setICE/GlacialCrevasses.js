"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialCrevasses extends Card {
  constructor(game) {
    super(game, "Glacial Crevasses", "Ice Age", "ICE");
  }
}

module.exports = GlacialCrevasses;
