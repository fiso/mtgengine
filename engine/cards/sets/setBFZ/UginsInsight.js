"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UginsInsight extends Card {
  constructor(game) {
    super(game, "Ugin's Insight", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UginsInsight;
