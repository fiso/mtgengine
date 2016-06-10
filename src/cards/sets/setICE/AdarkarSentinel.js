"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdarkarSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Adarkar Sentinel", "Ice Age", "ICE");
  }
}

module.exports = AdarkarSentinel;
