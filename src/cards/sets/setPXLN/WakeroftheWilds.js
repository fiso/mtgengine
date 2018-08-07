"use strict";
const Constants = require ("../../../Constants");
const WakeroftheWildsBase = require("../setXLN/WakeroftheWilds");

class WakeroftheWilds extends WakeroftheWildsBase {
  constructor (game) {
    super(game, "Waker of the Wilds", "Ixalan Promos", "PXLN");
  }
}

module.exports = WakeroftheWilds;
