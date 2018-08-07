"use strict";
const Constants = require ("../../../Constants");
const SaddlebackLagacBase = require("../setBBD/SaddlebackLagac");

class SaddlebackLagac extends SaddlebackLagacBase {
  constructor (game) {
    super(game, "Saddleback Lagac", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = SaddlebackLagac;
