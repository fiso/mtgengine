"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealitySpasm extends Card {
  constructor(game) {
    super(game, "Reality Spasm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RealitySpasm;
