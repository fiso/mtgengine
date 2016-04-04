"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowFortress extends Card {
  constructor(game) {
    super(game, "Snow Fortress", "Ice Age", "ICE");
  }
}

module.exports = SnowFortress;
