"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RedScarab extends Card {
  constructor(game) {
    super(game, "Red Scarab", "Ice Age", "ICE");
  }
}

module.exports = RedScarab;
