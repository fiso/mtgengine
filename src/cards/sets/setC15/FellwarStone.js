"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FellwarStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Fellwar Stone", "Commander 2015", "C15");
  }
}

module.exports = FellwarStone;
