"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistedJustice extends UnimplementedCard {
  constructor(game) {
    super(game, "Twisted Justice", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TwistedJustice;
