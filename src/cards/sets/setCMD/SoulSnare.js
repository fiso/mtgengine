"use strict";
const Constants = require ("../../../Constants");
const SoulSnareBase = require("../setC18/SoulSnare");

class SoulSnare extends SoulSnareBase {
  constructor (game) {
    super(game, "Soul Snare", "Commander 2011", "CMD");
  }
}

module.exports = SoulSnare;
