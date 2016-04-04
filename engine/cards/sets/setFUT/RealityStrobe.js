"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealityStrobe extends Card {
  constructor(game) {
    super(game, "Reality Strobe", "Future Sight", "FUT");
  }
}

module.exports = RealityStrobe;
