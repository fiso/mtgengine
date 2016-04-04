"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwiftReckoning extends Card {
  constructor(game) {
    super(game, "Swift Reckoning", "Magic Origins", "ORI");
  }
}

module.exports = SwiftReckoning;
