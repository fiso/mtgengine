"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreenScarab extends Card {
  constructor(game) {
    super(game, "Green Scarab", "Ice Age", "ICE");
  }
}

module.exports = GreenScarab;
