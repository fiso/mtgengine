"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodingSaurian extends UnimplementedCard {
  constructor (game) {
    super(game, "Brooding Saurian", "Commander 2013", "C13");
  }
}

module.exports = BroodingSaurian;
