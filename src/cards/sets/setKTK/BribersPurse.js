"use strict";
const Constants = require ("../../../Constants");
const BribersPurseBase = require("../setUGIN/BribersPurse");

class BribersPurse extends BribersPurseBase {
  constructor (game) {
    super(game, "Briber's Purse", "Khans of Tarkir", "KTK");
  }
}

module.exports = BribersPurse;
