"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandstoneNeedle extends Card {
  constructor(game) {
    super(game, "Sandstone Needle", "Mercadian Masques", "MMQ");
  }
}

module.exports = SandstoneNeedle;
