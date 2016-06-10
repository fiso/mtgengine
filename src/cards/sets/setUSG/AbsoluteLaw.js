"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbsoluteLaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Absolute Law", "Urza's Saga", "USG");
  }
}

module.exports = AbsoluteLaw;
