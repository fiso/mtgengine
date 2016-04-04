"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkerBeetles extends Card {
  constructor(game) {
    super(game, "Marker Beetles", "Urza's Destiny", "UDS");
  }
}

module.exports = MarkerBeetles;
