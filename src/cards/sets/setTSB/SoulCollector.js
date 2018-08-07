"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Collector", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = SoulCollector;
