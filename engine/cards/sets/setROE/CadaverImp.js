"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CadaverImpBase = require("../setDDP/CadaverImp.js");

class CadaverImp extends CadaverImpBase {
  constructor(game) {
    super(game, "Cadaver Imp", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CadaverImp;
