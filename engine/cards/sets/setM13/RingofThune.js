"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofThune extends Card {
  constructor(game) {
    super(game, "Ring of Thune", "Magic 2013", "M13");
  }
}

module.exports = RingofThune;
