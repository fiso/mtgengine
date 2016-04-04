"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlueScarab extends Card {
  constructor(game) {
    super(game, "Blue Scarab", "Ice Age", "ICE");
  }
}

module.exports = BlueScarab;
