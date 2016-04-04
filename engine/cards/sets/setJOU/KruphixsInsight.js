"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KruphixsInsight extends Card {
  constructor(game) {
    super(game, "Kruphix's Insight", "Journey into Nyx", "JOU");
  }
}

module.exports = KruphixsInsight;
