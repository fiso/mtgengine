"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FierceInvocationBase = require("../setFRF/FierceInvocation.js");

class FierceInvocation extends FierceInvocationBase {
  constructor(game) {
    super(game, "Fierce Invocation", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = FierceInvocation;
