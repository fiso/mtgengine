"use strict";
const Constants = require ("../../../Constants");
const BreathofDarigaazBase = require("../setCM2/BreathofDarigaaz");

class BreathofDarigaaz extends BreathofDarigaazBase {
  constructor (game) {
    super(game, "Breath of Darigaaz", "Commander 2011", "CMD");
  }
}

module.exports = BreathofDarigaaz;
