"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChipperChopper extends UnimplementedCard {
  constructor (game) {
    super(game, "Chipper Chopper", "Unstable", "UST");
  }
}

module.exports = ChipperChopper;
