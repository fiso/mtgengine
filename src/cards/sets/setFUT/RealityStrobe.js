"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityStrobe extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Strobe", "Future Sight", "FUT");
  }
}

module.exports = RealityStrobe;
