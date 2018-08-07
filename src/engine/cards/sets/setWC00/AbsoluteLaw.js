"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbsoluteLaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Absolute Law", "World Championship Decks 2000", "WC00");
  }
}

module.exports = AbsoluteLaw;
