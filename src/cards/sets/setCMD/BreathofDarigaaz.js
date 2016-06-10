"use strict";
const Constants = require ("../../../Constants");
const BreathofDarigaazBase = require("../setARC/BreathofDarigaaz");

class BreathofDarigaaz extends BreathofDarigaazBase {
  constructor (game) {
    super(game, "Breath of Darigaaz", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BreathofDarigaaz;
