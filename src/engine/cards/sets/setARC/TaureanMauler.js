"use strict";
const Constants = require ("../../../Constants");
const TaureanMaulerBase = require("../setCM2/TaureanMauler");

class TaureanMauler extends TaureanMaulerBase {
  constructor (game) {
    super(game, "Taurean Mauler", "Archenemy", "ARC");
  }
}

module.exports = TaureanMauler;
