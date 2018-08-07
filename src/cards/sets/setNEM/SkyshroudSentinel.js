"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshroudSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshroud Sentinel", "Nemesis", "NEM");
  }
}

module.exports = SkyshroudSentinel;
