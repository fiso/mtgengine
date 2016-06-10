"use strict";
const Constants = require ("../../../Constants");
const BreathofDarigaazBase = require("../setARC/BreathofDarigaaz");

class BreathofDarigaaz extends BreathofDarigaazBase {
  constructor (game) {
    super(game, "Breath of Darigaaz", "Invasion", "INV");
  }
}

module.exports = BreathofDarigaaz;
