"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpreadingSeas extends Card {
  constructor(game) {
    super(game, "Spreading Seas", "Zendikar", "ZEN");
  }
}

module.exports = SpreadingSeas;
