"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingSponge extends Card {
  constructor(game) {
    super(game, "Walking Sponge", "Urza's Legacy", "ULG");
  }
}

module.exports = WalkingSponge;
