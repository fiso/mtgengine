"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveExchange extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Exchange", "Avacyn Restored", "AVR");
  }
}

module.exports = GraveExchange;
