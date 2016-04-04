"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AllIsDustBase = require("../setpGPX/AllIsDust.js");

class AllIsDust extends AllIsDustBase {
  constructor(game) {
    super(game, "All Is Dust", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AllIsDust;
