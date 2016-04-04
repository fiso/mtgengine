"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LiarsPendulum extends Card {
  constructor(game) {
    super(game, "Liar's Pendulum", "Mirrodin", "MRD");
  }
}

module.exports = LiarsPendulum;
