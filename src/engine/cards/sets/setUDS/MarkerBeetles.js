"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkerBeetles extends UnimplementedCard {
  constructor (game) {
    super(game, "Marker Beetles", "Urza's Destiny", "UDS");
  }
}

module.exports = MarkerBeetles;
