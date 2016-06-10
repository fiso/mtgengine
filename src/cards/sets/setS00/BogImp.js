"use strict";
const Constants = require ("../../../Constants");
const BogImpBase = require("../set6ED/BogImp");

class BogImp extends BogImpBase {
  constructor (game) {
    super(game, "Bog Imp", "Starter 2000", "S00");
  }
}

module.exports = BogImp;
