"use strict";
const Constants = require ("../../../Constants");
const NecropolisFiendBase = require("../setCP2/NecropolisFiend");

class NecropolisFiend extends NecropolisFiendBase {
  constructor (game) {
    super(game, "Necropolis Fiend", "Magic Online Promos", "PRM");
  }
}

module.exports = NecropolisFiend;
