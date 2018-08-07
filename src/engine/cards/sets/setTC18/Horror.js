"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Horror extends UnimplementedCard {
  constructor (game) {
    super(game, "Horror", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Horror;
