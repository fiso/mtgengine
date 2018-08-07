"use strict";
const Constants = require ("../../../Constants");
const MagmaSprayBase = require("../setAKH/MagmaSpray");

class MagmaSpray extends MagmaSprayBase {
  constructor (game) {
    super(game, "Magma Spray", "Friday Night Magic 2014", "F14");
  }
}

module.exports = MagmaSpray;
