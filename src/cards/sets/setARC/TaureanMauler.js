"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaureanMauler extends UnimplementedCard {
  constructor(game) {
    super(game, "Taurean Mauler", "Archenemy", "ARC");
  }
}

module.exports = TaureanMauler;
