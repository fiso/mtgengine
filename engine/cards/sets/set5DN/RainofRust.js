"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofRust extends Card {
  constructor(game) {
    super(game, "Rain of Rust", "Fifth Dawn", "5DN");
  }
}

module.exports = RainofRust;
