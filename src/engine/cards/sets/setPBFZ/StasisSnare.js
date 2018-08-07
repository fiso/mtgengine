"use strict";
const Constants = require ("../../../Constants");
const StasisSnareBase = require("../setBFZ/StasisSnare");

class StasisSnare extends StasisSnareBase {
  constructor (game) {
    super(game, "Stasis Snare", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = StasisSnare;
