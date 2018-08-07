"use strict";
const Constants = require ("../../../Constants");
const BituminousBlastBase = require("../setPCA/BituminousBlast");

class BituminousBlast extends BituminousBlastBase {
  constructor (game) {
    super(game, "Bituminous Blast", "Archenemy", "ARC");
  }
}

module.exports = BituminousBlast;
