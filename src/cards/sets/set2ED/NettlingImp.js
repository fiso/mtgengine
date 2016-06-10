"use strict";
const Constants = require ("../../../Constants");
const NettlingImpBase = require("../setCED/NettlingImp");

class NettlingImp extends NettlingImpBase {
  constructor (game) {
    super(game, "Nettling Imp", "Unlimited Edition", "2ED");
  }
}

module.exports = NettlingImp;
