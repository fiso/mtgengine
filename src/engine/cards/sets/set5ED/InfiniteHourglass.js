"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfiniteHourglass extends UnimplementedCard {
  constructor (game) {
    super(game, "Infinite Hourglass", "Fifth Edition", "5ED");
  }
}

module.exports = InfiniteHourglass;
