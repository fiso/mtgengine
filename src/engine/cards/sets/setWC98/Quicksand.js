"use strict";
const Constants = require ("../../../Constants");
const QuicksandBase = require("../setA25/Quicksand");

class Quicksand extends QuicksandBase {
  constructor (game) {
    super(game, "Quicksand", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Quicksand;
