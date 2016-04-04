"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeralInvocation extends Card {
  constructor(game) {
    super(game, "Feral Invocation", "Theros", "THS");
  }
}

module.exports = FeralInvocation;
