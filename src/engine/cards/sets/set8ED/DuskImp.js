"use strict";
const Constants = require ("../../../Constants");
const DuskImpBase = require("../setDVD/DuskImp");

class DuskImp extends DuskImpBase {
  constructor (game) {
    super(game, "Dusk Imp", "Eighth Edition", "8ED");
  }
}

module.exports = DuskImp;
