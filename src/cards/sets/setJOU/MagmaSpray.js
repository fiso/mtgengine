"use strict";
const Constants = require ("../../../Constants");
const MagmaSprayBase = require("../setDDJ/MagmaSpray");

class MagmaSpray extends MagmaSprayBase {
  constructor(game) {
    super(game, "Magma Spray", "Journey into Nyx", "JOU");
  }
}

module.exports = MagmaSpray;
