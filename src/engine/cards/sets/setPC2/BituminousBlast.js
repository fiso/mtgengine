"use strict";
const Constants = require ("../../../Constants");
const BituminousBlastBase = require("../setPCA/BituminousBlast");

class BituminousBlast extends BituminousBlastBase {
  constructor (game) {
    super(game, "Bituminous Blast", "Planechase 2012", "PC2");
  }
}

module.exports = BituminousBlast;
