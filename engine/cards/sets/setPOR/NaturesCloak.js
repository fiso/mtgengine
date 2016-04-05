"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesCloak extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature's Cloak", "Portal", "POR");
  }
}

module.exports = NaturesCloak;
