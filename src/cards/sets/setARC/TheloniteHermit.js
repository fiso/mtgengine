"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheloniteHermit extends UnimplementedCard {
  constructor (game) {
    super(game, "Thelonite Hermit", "Archenemy", "ARC");
  }
}

module.exports = TheloniteHermit;
