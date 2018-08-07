"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Greed extends UnimplementedCard {
  constructor (game) {
    super(game, "Greed", "Commander 2013", "C13");
  }
}

module.exports = Greed;
