"use strict";
const Constants = require ("../../../Constants");
const MagmaSprayBase = require("../setAKH/MagmaSpray");

class MagmaSpray extends MagmaSprayBase {
  constructor (game) {
    super(game, "Magma Spray", "Shards of Alara", "ALA");
  }
}

module.exports = MagmaSpray;
