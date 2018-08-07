"use strict";
const Constants = require ("../../../Constants");
const NecropolisFiendBase = require("../setCP2/NecropolisFiend");

class NecropolisFiend extends NecropolisFiendBase {
  constructor (game) {
    super(game, "Necropolis Fiend", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = NecropolisFiend;
