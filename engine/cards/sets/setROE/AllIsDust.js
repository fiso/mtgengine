"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AllIsDustBase = require("../setpGPX/AllIsDust.js");

class AllIsDust extends AllIsDustBase {
  constructor(game) {
    super(game, "All Is Dust", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AllIsDust;
