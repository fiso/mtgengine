"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulCollector extends Card {
  constructor(game) {
    super(game, "Soul Collector", "Prerelease Events", "pPRE");
  }
}

module.exports = SoulCollector;
