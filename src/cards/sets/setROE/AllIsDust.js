"use strict";
const Constants = require ("../../../Constants");
const AllIsDustBase = require("../setpGPX/AllIsDust");

class AllIsDust extends AllIsDustBase {
  constructor (game) {
    super(game, "All Is Dust", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AllIsDust;
