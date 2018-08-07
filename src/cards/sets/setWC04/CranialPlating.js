"use strict";
const Constants = require ("../../../Constants");
const CranialPlatingBase = require("../setC16/CranialPlating");

class CranialPlating extends CranialPlatingBase {
  constructor (game) {
    super(game, "Cranial Plating", "World Championship Decks 2004", "WC04");
  }
}

module.exports = CranialPlating;
