"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SporeFrog extends Card {
  constructor(game) {
    super(game, "Spore Frog", "Prophecy", "PCY");
  }
}

module.exports = SporeFrog;
