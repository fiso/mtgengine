"use strict";
const Constants = require ("../../../Constants");
const EternitySnareBase = require("../setBNG/EternitySnare");

class EternitySnare extends EternitySnareBase {
  constructor(game) {
    super(game, "Eternity Snare", "Time Spiral", "TSP");
  }
}

module.exports = EternitySnare;
