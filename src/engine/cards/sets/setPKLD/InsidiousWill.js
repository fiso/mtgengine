"use strict";
const Constants = require ("../../../Constants");
const InsidiousWillBase = require("../setKLD/InsidiousWill");

class InsidiousWill extends InsidiousWillBase {
  constructor (game) {
    super(game, "Insidious Will", "Kaladesh Promos", "PKLD");
  }
}

module.exports = InsidiousWill;
