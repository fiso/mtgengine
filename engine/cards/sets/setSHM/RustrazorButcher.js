"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RustrazorButcher extends Card {
  constructor(game) {
    super(game, "Rustrazor Butcher", "Shadowmoor", "SHM");
  }
}

module.exports = RustrazorButcher;
