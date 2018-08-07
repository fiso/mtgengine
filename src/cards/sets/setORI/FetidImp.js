"use strict";
const Constants = require ("../../../Constants");
const FetidImpBase = require("../setDDR/FetidImp");

class FetidImp extends FetidImpBase {
  constructor (game) {
    super(game, "Fetid Imp", "Magic Origins", "ORI");
  }
}

module.exports = FetidImp;
