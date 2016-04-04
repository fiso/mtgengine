"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofImmortals extends Card {
  constructor(game) {
    super(game, "Ring of Immortals", "Legends", "LEG");
  }
}

module.exports = RingofImmortals;
