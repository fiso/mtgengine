"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Sliver", "Magic 2014", "M14");
  }
}

module.exports = SentinelSliver;
