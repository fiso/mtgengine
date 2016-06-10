"use strict";
const Constants = require ("../../../Constants");
const BogImpBase = require("../set6ED/BogImp");

class BogImp extends BogImpBase {
  constructor (game) {
    super(game, "Bog Imp", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = BogImp;
