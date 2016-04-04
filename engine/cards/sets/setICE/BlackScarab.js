"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackScarab extends Card {
  constructor(game) {
    super(game, "Black Scarab", "Ice Age", "ICE");
  }
}

module.exports = BlackScarab;
