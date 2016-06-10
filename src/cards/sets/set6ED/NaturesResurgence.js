"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesResurgence extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Resurgence", "Classic Sixth Edition", "6ED");
  }
}

module.exports = NaturesResurgence;
