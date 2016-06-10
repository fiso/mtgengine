"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Flame", "Ice Age", "ICE");
  }
}

module.exports = GhostlyFlame;
