"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mulch extends UnimplementedCard {
  constructor (game) {
    super(game, "Mulch", "Commander 2015", "C15");
  }
}

module.exports = Mulch;
