"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainsCall extends Card {
  constructor(game) {
    super(game, "Captain's Call", "Magic 2013", "M13");
  }
}

module.exports = CaptainsCall;
