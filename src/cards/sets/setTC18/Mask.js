"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mask extends UnimplementedCard {
  constructor (game) {
    super(game, "Mask", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Mask;
