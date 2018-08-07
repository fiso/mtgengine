"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofKalonia extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Kalonia", "Magic 2013", "M13");
  }
}

module.exports = RingofKalonia;
