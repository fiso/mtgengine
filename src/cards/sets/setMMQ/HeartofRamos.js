"use strict";
const Constants = require ("../../../Constants");
const HeartofRamosBase = require("../setWC00/HeartofRamos");

class HeartofRamos extends HeartofRamosBase {
  constructor (game) {
    super(game, "Heart of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = HeartofRamos;
