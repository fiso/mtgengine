"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whiteout extends Card {
  constructor(game) {
    super(game, "Whiteout", "Ice Age", "ICE");
  }
}

module.exports = Whiteout;
