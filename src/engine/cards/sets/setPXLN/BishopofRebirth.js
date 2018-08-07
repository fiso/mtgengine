"use strict";
const Constants = require ("../../../Constants");
const BishopofRebirthBase = require("../setXLN/BishopofRebirth");

class BishopofRebirth extends BishopofRebirthBase {
  constructor (game) {
    super(game, "Bishop of Rebirth", "Ixalan Promos", "PXLN");
  }
}

module.exports = BishopofRebirth;
