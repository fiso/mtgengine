"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Collector", "Prerelease Events", "pPRE");
  }
}

module.exports = SoulCollector;
