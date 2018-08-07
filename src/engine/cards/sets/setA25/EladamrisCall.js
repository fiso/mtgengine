"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EladamrisCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Eladamri's Call", "Masters 25", "A25");
  }
}

module.exports = EladamrisCall;
