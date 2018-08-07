"use strict";
const Constants = require ("../../../Constants");
const LeafGilderBase = require("../setDDU/LeafGilder");

class LeafGilder extends LeafGilderBase {
  constructor (game) {
    super(game, "Leaf Gilder", "Archenemy", "ARC");
  }
}

module.exports = LeafGilder;
