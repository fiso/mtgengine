"use strict";
const Constants = require ("../../../Constants");
const DuskImpBase = require("../setDVD/DuskImp");

class DuskImp extends DuskImpBase {
  constructor (game) {
    super(game, "Dusk Imp", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DuskImp;
