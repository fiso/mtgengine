"use strict";
const Constants = require ("../../../Constants");
const CadaverImpBase = require("../setPCA/CadaverImp");

class CadaverImp extends CadaverImpBase {
  constructor (game) {
    super(game, "Cadaver Imp", "Planechase 2012", "PC2");
  }
}

module.exports = CadaverImp;
