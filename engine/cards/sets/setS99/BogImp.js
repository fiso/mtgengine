"use strict";
const Constants = require ("../../../Constants");
const BogImpBase = require("../set6ED/BogImp");

class BogImp extends BogImpBase {
  constructor(game) {
    super(game, "Bog Imp", "Starter 1999", "S99");
  }
}

module.exports = BogImp;
