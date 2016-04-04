"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverErne extends Card {
  constructor(game) {
    super(game, "Silver Erne", "Ice Age", "ICE");
  }
}

module.exports = SilverErne;
