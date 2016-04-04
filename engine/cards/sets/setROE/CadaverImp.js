"use strict";
const Constants = require ("../../../Constants");
const CadaverImpBase = require("../setDDP/CadaverImp");

class CadaverImp extends CadaverImpBase {
  constructor(game) {
    super(game, "Cadaver Imp", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CadaverImp;
