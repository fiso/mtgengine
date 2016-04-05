"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapidDecay extends UnimplementedCard {
  constructor(game) {
    super(game, "Rapid Decay", "Urza's Destiny", "UDS");
  }
}

module.exports = RapidDecay;
