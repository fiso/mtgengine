"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CosisRavagerBase = require("../setDDI/CosisRavager.js");

class CosisRavager extends CosisRavagerBase {
  constructor(game) {
    super(game, "Cosi's Ravager", "Worldwake", "WWK");
  }
}

module.exports = CosisRavager;
