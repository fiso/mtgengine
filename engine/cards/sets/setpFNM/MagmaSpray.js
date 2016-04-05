"use strict";
const Constants = require ("../../../Constants");
const MagmaSprayBase = require("../setDDJ/MagmaSpray");

class MagmaSpray extends MagmaSprayBase {
  constructor(game) {
    super(game, "Magma Spray", "Friday Night Magic", "pFNM");
  }
}

module.exports = MagmaSpray;
