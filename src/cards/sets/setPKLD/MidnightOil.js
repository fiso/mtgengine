"use strict";
const Constants = require ("../../../Constants");
const MidnightOilBase = require("../setKLD/MidnightOil");

class MidnightOil extends MidnightOilBase {
  constructor (game) {
    super(game, "Midnight Oil", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MidnightOil;
