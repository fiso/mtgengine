"use strict";
const Constants = require ("../../../Constants");
const SoulSnareBase = require("../setC18/SoulSnare");

class SoulSnare extends SoulSnareBase {
  constructor (game) {
    super(game, "Soul Snare", "Commander Anthology", "CMA");
  }
}

module.exports = SoulSnare;
