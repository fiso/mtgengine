"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleQuarry extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Quarry", "Commander 2015", "C15");
  }
}

module.exports = NobleQuarry;
