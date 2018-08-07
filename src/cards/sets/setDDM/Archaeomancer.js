"use strict";
const Constants = require ("../../../Constants");
const ArchaeomancerBase = require("../setC17/Archaeomancer");

class Archaeomancer extends ArchaeomancerBase {
  constructor (game) {
    super(game, "Archaeomancer", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Archaeomancer;
