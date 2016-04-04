"use strict";
const Constants = require ("../../../Constants");
const CosisRavagerBase = require("../setDDI/CosisRavager");

class CosisRavager extends CosisRavagerBase {
  constructor(game) {
    super(game, "Cosi's Ravager", "Worldwake", "WWK");
  }
}

module.exports = CosisRavager;
