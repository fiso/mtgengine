"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeechriddenSwamp extends Card {
  constructor(game) {
    super(game, "Leechridden Swamp", "Planechase", "HOP");
  }
}

module.exports = LeechriddenSwamp;
