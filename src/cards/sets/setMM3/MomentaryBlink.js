"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentaryBlink extends UnimplementedCard {
  constructor (game) {
    super(game, "Momentary Blink", "Modern Masters 2017", "MM3");
  }
}

module.exports = MomentaryBlink;
