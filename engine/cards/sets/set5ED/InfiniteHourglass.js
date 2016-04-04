"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfiniteHourglass extends Card {
  constructor(game) {
    super(game, "Infinite Hourglass", "Fifth Edition", "5ED");
  }
}

module.exports = InfiniteHourglass;
