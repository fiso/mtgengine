"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Momentum extends Card {
  constructor(game) {
    super(game, "Momentum", "Urza's Destiny", "UDS");
  }
}

module.exports = Momentum;
