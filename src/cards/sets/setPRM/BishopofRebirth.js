"use strict";
const Constants = require ("../../../Constants");
const BishopofRebirthBase = require("../setXLN/BishopofRebirth");

class BishopofRebirth extends BishopofRebirthBase {
  constructor (game) {
    super(game, "Bishop of Rebirth", "Magic Online Promos", "PRM");
  }
}

module.exports = BishopofRebirth;
