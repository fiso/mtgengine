"use strict";
const Constants = require ("../../../Constants");
const FierceInvocationBase = require("../setFRF/FierceInvocation");

class FierceInvocation extends FierceInvocationBase {
  constructor (game) {
    super(game, "Fierce Invocation", "Magic Online Promos", "PRM");
  }
}

module.exports = FierceInvocation;
