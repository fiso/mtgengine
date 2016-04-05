"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistedAbomination extends UnimplementedCard {
  constructor(game) {
    super(game, "Twisted Abomination", "Archenemy", "ARC");
  }
}

module.exports = TwistedAbomination;
