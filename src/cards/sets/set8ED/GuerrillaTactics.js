"use strict";
const Constants = require ("../../../Constants");
const GuerrillaTacticsBase = require("../set10E/GuerrillaTactics");

class GuerrillaTactics extends GuerrillaTacticsBase {
  constructor (game) {
    super(game, "Guerrilla Tactics", "Eighth Edition", "8ED");
  }
}

module.exports = GuerrillaTactics;
