"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlatantThievery extends UnimplementedCard {
  constructor(game) {
    super(game, "Blatant Thievery", "Commander 2015", "C15");
  }
}

module.exports = BlatantThievery;
