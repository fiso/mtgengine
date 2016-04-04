"use strict";
const Constants = require ("../../../Constants");
const BogImpBase = require("../set6ED/BogImp");

class BogImp extends BogImpBase {
  constructor(game) {
    super(game, "Bog Imp", "Eighth Edition", "8ED");
  }
}

module.exports = BogImp;
