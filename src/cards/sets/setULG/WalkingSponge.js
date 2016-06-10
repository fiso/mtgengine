"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingSponge extends UnimplementedCard {
  constructor (game) {
    super(game, "Walking Sponge", "Urza's Legacy", "ULG");
  }
}

module.exports = WalkingSponge;
