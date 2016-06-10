"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilThicket extends UnimplementedCard {
  constructor (game) {
    super(game, "Tranquil Thicket", "Archenemy", "ARC");
  }
}

module.exports = TranquilThicket;
