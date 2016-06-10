"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbsoluteGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Absolute Grace", "Urza's Saga", "USG");
  }
}

module.exports = AbsoluteGrace;
