"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningRift extends Card {
  constructor(game) {
    super(game, "Lightning Rift", "Friday Night Magic", "pFNM");
  }
}

module.exports = LightningRift;
