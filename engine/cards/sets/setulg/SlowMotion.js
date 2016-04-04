"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlowMotion extends Card {
  constructor(game) {
    super(game, "Slow Motion", "Urza's Legacy", "ULG");
  }
}

module.exports = SlowMotion;
