"use strict";
const Constants = require ("../../../Constants");
const HeiroftheWildsBase = require("../setKTK/HeiroftheWilds");

class HeiroftheWilds extends HeiroftheWildsBase {
  constructor (game) {
    super(game, "Heir of the Wilds", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = HeiroftheWilds;
