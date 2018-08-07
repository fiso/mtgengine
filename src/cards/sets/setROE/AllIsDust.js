"use strict";
const Constants = require ("../../../Constants");
const AllIsDustBase = require("../setMM2/AllIsDust");

class AllIsDust extends AllIsDustBase {
  constructor (game) {
    super(game, "All Is Dust", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AllIsDust;
