"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofValkas extends Card {
  constructor(game) {
    super(game, "Ring of Valkas", "Magic 2013", "M13");
  }
}

module.exports = RingofValkas;
