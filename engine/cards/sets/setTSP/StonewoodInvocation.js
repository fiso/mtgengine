"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonewoodInvocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonewood Invocation", "Time Spiral", "TSP");
  }
}

module.exports = StonewoodInvocation;
