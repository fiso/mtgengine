"use strict";
const Constants = require ("../../../Constants");
const SmotheringAbominationBase = require("../setBFZ/SmotheringAbomination");

class SmotheringAbomination extends SmotheringAbominationBase {
  constructor (game) {
    super(game, "Smothering Abomination", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = SmotheringAbomination;
