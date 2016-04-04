"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefulStrixBase = require("../setC13/BalefulStrix.js");

class BalefulStrix extends BalefulStrixBase {
  constructor(game) {
    super(game, "Baleful Strix", "Vintage Masters", "VMA");
  }
}

module.exports = BalefulStrix;
