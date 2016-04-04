"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CadaverImpBase = require("../setDDP/CadaverImp.js");

class CadaverImp extends CadaverImpBase {
  constructor(game) {
    super(game, "Cadaver Imp", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = CadaverImp;
