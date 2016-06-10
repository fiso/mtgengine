"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamstoneHedron extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Archenemy", "ARC");
  }
}

module.exports = DreamstoneHedron;
