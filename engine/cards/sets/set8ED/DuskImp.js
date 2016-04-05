"use strict";
const Constants = require ("../../../Constants");
const DuskImpBase = require("../setDD3_DVD/DuskImp");

class DuskImp extends DuskImpBase {
  constructor(game) {
    super(game, "Dusk Imp", "Eighth Edition", "8ED");
  }
}

module.exports = DuskImp;
