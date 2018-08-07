"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuthlessRipper extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruthless Ripper", "Masters 25", "A25");
  }
}

module.exports = RuthlessRipper;
