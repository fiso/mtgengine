"use strict";
const Constants = require ("../../../Constants");
const CadaverImpBase = require("../setDDP/CadaverImp");

class CadaverImp extends CadaverImpBase {
  constructor (game) {
    super(game, "Cadaver Imp", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = CadaverImp;
