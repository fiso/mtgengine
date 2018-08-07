"use strict";
const Constants = require ("../../../Constants");
const SpiritWeaverBase = require("../set10E/SpiritWeaver");

class SpiritWeaver extends SpiritWeaverBase {
  constructor (game) {
    super(game, "Spirit Weaver", "Invasion", "INV");
  }
}

module.exports = SpiritWeaver;
