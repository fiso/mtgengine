"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonewoodInvocation extends Card {
  constructor(game) {
    super(game, "Stonewood Invocation", "Time Spiral", "TSP");
  }
}

module.exports = StonewoodInvocation;
