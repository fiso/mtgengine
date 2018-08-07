"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShaperApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaper Apprentice", "Ixalan", "XLN");
  }
}

module.exports = ShaperApprentice;
