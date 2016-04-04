"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogGlider extends Card {
  constructor(game) {
    super(game, "Bog Glider", "Prophecy", "PCY");
  }
}

module.exports = BogGlider;
