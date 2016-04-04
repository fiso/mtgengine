"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesRuin extends Card {
  constructor(game) {
    super(game, "Nature's Ruin", "Portal", "POR");
  }
}

module.exports = NaturesRuin;
