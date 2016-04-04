"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofKalonia extends Card {
  constructor(game) {
    super(game, "Ring of Kalonia", "Magic 2013", "M13");
  }
}

module.exports = RingofKalonia;
