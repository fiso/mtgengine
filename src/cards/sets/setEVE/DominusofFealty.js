"use strict";
const Constants = require ("../../../Constants");
const DominusofFealtyBase = require("../setCMD/DominusofFealty");

class DominusofFealty extends DominusofFealtyBase {
  constructor (game) {
    super(game, "Dominus of Fealty", "Eventide", "EVE");
  }
}

module.exports = DominusofFealty;
