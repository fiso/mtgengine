"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortuneThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortune Thief", "Time Spiral", "TSP");
  }
}

module.exports = FortuneThief;
