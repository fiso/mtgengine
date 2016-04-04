"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesRuin extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature's Ruin", "Portal", "POR");
  }
}

module.exports = NaturesRuin;
