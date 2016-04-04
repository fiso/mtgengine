"use strict";
const Constants = require ("../../../Constants");
const SpiritWeaverBase = require("../setINV/SpiritWeaver");

class SpiritWeaver extends SpiritWeaverBase {
  constructor(game) {
    super(game, "Spirit Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SpiritWeaver;
