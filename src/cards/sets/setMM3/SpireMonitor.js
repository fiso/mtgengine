"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Monitor", "Modern Masters 2017", "MM3");
  }
}

module.exports = SpireMonitor;
