"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealitySpasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality Spasm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RealitySpasm;
