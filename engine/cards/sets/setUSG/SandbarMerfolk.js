"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandbarMerfolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandbar Merfolk", "Urza's Saga", "USG");
  }
}

module.exports = SandbarMerfolk;
