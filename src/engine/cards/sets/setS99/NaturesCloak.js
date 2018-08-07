"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Cloak", "Starter 1999", "S99");
  }
}

module.exports = NaturesCloak;
