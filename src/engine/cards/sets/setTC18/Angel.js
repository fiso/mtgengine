"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Angel extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Angel;
