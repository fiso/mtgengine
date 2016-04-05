"use strict";
const Constants = require ("../../../Constants");
const LeafGilderBase = require("../setARC/LeafGilder");

class LeafGilder extends LeafGilderBase {
  constructor(game) {
    super(game, "Leaf Gilder", "Magic Origins", "ORI");
  }
}

module.exports = LeafGilder;
