"use strict";
const Constants = require ("../../../Constants");
const TaureanMaulerBase = require("../setCM2/TaureanMauler");

class TaureanMauler extends TaureanMaulerBase {
  constructor (game) {
    super(game, "Taurean Mauler", "Commander 2015", "C15");
  }
}

module.exports = TaureanMauler;
