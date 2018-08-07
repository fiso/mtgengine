"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StupefyingTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Stupefying Touch", "Eternal Masters", "EMA");
  }
}

module.exports = StupefyingTouch;
