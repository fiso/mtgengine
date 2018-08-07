"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shapeshifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shapeshifter", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Shapeshifter;
