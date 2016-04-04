"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeastHunt extends Card {
  constructor(game) {
    super(game, "Beast Hunt", "Planechase", "HOP");
  }
}

module.exports = BeastHunt;
