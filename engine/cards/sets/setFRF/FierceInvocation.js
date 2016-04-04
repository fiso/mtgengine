"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FierceInvocation extends Card {
  constructor(game) {
    super(game, "Fierce Invocation", "Fate Reforged", "FRF");
  }
}

module.exports = FierceInvocation;
