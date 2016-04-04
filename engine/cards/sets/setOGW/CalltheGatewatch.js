"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalltheGatewatch extends Card {
  constructor(game) {
    super(game, "Call the Gatewatch", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CalltheGatewatch;
