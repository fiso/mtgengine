"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortuneThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortune Thief", "Masters 25", "A25");
  }
}

module.exports = FortuneThief;
