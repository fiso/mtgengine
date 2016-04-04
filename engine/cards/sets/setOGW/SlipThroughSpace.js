"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlipThroughSpace extends Card {
  constructor(game) {
    super(game, "Slip Through Space", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SlipThroughSpace;
