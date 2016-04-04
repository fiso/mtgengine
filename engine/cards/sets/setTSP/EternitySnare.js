"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EternitySnareBase = require("../setBNG/EternitySnare.js");

class EternitySnare extends EternitySnareBase {
  constructor(game) {
    super(game, "Eternity Snare", "Time Spiral", "TSP");
  }
}

module.exports = EternitySnare;
