"use strict";
const Constants = require ("../../../Constants");
const GuerrillaTacticsBase = require("../set10E/GuerrillaTactics");

class GuerrillaTactics extends GuerrillaTacticsBase {
  constructor (game) {
    super(game, "Guerrilla Tactics", "Ninth Edition", "9ED");
  }
}

module.exports = GuerrillaTactics;
