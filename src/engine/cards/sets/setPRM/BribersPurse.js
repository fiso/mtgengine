"use strict";
const Constants = require ("../../../Constants");
const BribersPurseBase = require("../setUGIN/BribersPurse");

class BribersPurse extends BribersPurseBase {
  constructor (game) {
    super(game, "Briber's Purse", "Magic Online Promos", "PRM");
  }
}

module.exports = BribersPurse;
