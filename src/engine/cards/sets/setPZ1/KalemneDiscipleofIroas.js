"use strict";
const Constants = require ("../../../Constants");
const KalemneDiscipleofIroasBase = require("../setCM2/KalemneDiscipleofIroas");

class KalemneDiscipleofIroas extends KalemneDiscipleofIroasBase {
  constructor (game) {
    super(game, "Kalemne, Disciple of Iroas", "Legendary Cube", "PZ1");
  }
}

module.exports = KalemneDiscipleofIroas;
