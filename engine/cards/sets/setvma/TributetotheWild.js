"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TributetotheWildBase = require("../setC15/TributetotheWild.js");

class TributetotheWild extends TributetotheWildBase {
  constructor(game) {
    super(game, "Tribute to the Wild", "Vintage Masters", "VMA");
  }
}

module.exports = TributetotheWild;
