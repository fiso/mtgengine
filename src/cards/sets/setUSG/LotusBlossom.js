"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusBlossom extends UnimplementedCard {
  constructor (game) {
    super(game, "Lotus Blossom", "Urza's Saga", "USG");
  }
}

module.exports = LotusBlossom;
