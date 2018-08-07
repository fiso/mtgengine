"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StirringWildwood extends UnimplementedCard {
  constructor (game) {
    super(game, "Stirring Wildwood", "Commander 2017", "C17");
  }
}

module.exports = StirringWildwood;
