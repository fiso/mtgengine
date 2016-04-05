"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarnessbyForce extends UnimplementedCard {
  constructor(game) {
    super(game, "Harness by Force", "Journey into Nyx", "JOU");
  }
}

module.exports = HarnessbyForce;
