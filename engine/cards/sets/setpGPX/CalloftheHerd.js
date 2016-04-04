"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalloftheHerd extends Card {
  constructor(game) {
    super(game, "Call of the Herd", "Grand Prix", "pGPX");
  }
}

module.exports = CalloftheHerd;
