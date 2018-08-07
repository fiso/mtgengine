"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralInvocation extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Invocation", "Theros", "THS");
  }
}

module.exports = FeralInvocation;
