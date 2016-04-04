"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneQuarry extends Card {
  constructor(game) {
    super(game, "Stone Quarry", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StoneQuarry;
