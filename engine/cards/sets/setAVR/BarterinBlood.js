"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarterinBlood extends Card {
  constructor(game) {
    super(game, "Barter in Blood", "Avacyn Restored", "AVR");
  }
}

module.exports = BarterinBlood;
