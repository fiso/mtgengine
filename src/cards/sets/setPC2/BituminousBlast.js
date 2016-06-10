"use strict";
const Constants = require ("../../../Constants");
const BituminousBlastBase = require("../setARB/BituminousBlast");

class BituminousBlast extends BituminousBlastBase {
  constructor (game) {
    super(game, "Bituminous Blast", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BituminousBlast;
