"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Warning extends Card {
  constructor(game) {
    super(game, "Warning", "Ice Age", "ICE");
  }
}

module.exports = Warning;
