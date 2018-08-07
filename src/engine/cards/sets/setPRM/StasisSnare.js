"use strict";
const Constants = require ("../../../Constants");
const StasisSnareBase = require("../setBFZ/StasisSnare");

class StasisSnare extends StasisSnareBase {
  constructor (game) {
    super(game, "Stasis Snare", "Magic Online Promos", "PRM");
  }
}

module.exports = StasisSnare;
