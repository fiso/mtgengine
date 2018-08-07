"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercilessEviction extends UnimplementedCard {
  constructor (game) {
    super(game, "Merciless Eviction", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MercilessEviction;
