"use strict";
const Constants = require ("../../../Constants");
const CobbledWingsBase = require("../setXLN/CobbledWings");

class CobbledWings extends CobbledWingsBase {
  constructor (game) {
    super(game, "Cobbled Wings", "Innistrad", "ISD");
  }
}

module.exports = CobbledWings;
