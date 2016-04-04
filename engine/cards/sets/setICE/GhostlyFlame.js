"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyFlame extends Card {
  constructor(game) {
    super(game, "Ghostly Flame", "Ice Age", "ICE");
  }
}

module.exports = GhostlyFlame;
