"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setM15/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Dissipate;
