"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlashofInsight extends Card {
  constructor(game) {
    super(game, "Flash of Insight", "Judgment", "JUD");
  }
}

module.exports = FlashofInsight;
