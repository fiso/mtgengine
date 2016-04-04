"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandsEdge extends Card {
  constructor(game) {
    super(game, "Land's Edge", "Chronicles", "CHR");
  }
}

module.exports = LandsEdge;
