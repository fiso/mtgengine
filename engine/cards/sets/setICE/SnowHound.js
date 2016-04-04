"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowHound extends Card {
  constructor(game) {
    super(game, "Snow Hound", "Ice Age", "ICE");
  }
}

module.exports = SnowHound;
