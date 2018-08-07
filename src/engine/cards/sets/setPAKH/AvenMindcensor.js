"use strict";
const Constants = require ("../../../Constants");
const AvenMindcensorBase = require("../setAKH/AvenMindcensor");

class AvenMindcensor extends AvenMindcensorBase {
  constructor (game) {
    super(game, "Aven Mindcensor", "Amonkhet Promos", "PAKH");
  }
}

module.exports = AvenMindcensor;
