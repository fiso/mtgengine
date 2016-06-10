"use strict";
const Constants = require ("../../../Constants");
const BribersPurseBase = require("../setKTK/BribersPurse");

class BribersPurse extends BribersPurseBase {
  constructor (game) {
    super(game, "Briber's Purse", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = BribersPurse;
