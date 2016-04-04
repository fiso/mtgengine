"use strict";
const Constants = require ("../../../Constants");
const NecropolisFiendBase = require("../setCPK/NecropolisFiend");

class NecropolisFiend extends NecropolisFiendBase {
  constructor(game) {
    super(game, "Necropolis Fiend", "Khans of Tarkir", "KTK");
  }
}

module.exports = NecropolisFiend;
