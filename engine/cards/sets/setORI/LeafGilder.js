"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeafGilderBase = require("../setARC/LeafGilder.js");

class LeafGilder extends LeafGilderBase {
  constructor(game) {
    super(game, "Leaf Gilder", "Magic Origins", "ORI");
  }
}

module.exports = LeafGilder;
