"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesKiss extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature's Kiss", "Weatherlight", "WTH");
  }
}

module.exports = NaturesKiss;
