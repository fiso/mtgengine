"use strict";
const Constants = require ("../../../Constants");
const BituminousBlastBase = require("../setPCA/BituminousBlast");

class BituminousBlast extends BituminousBlastBase {
  constructor (game) {
    super(game, "Bituminous Blast", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = BituminousBlast;
