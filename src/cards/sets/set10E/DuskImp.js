"use strict";
const Constants = require ("../../../Constants");
const DuskImpBase = require("../setDVD/DuskImp");

class DuskImp extends DuskImpBase {
  constructor (game) {
    super(game, "Dusk Imp", "Tenth Edition", "10E");
  }
}

module.exports = DuskImp;
