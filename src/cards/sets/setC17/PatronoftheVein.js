"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheVein extends UnimplementedCard {
  constructor (game) {
    super(game, "Patron of the Vein", "Commander 2017", "C17");
  }
}

module.exports = PatronoftheVein;
