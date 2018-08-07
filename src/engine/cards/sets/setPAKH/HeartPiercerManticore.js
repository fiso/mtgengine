"use strict";
const Constants = require ("../../../Constants");
const HeartPiercerManticoreBase = require("../setAKH/HeartPiercerManticore");

class HeartPiercerManticore extends HeartPiercerManticoreBase {
  constructor (game) {
    super(game, "Heart-Piercer Manticore", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HeartPiercerManticore;
